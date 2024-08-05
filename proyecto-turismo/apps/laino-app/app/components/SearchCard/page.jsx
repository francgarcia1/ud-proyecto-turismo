import React, { useContext, useEffect, useState } from "react";
import styles from "./searchcard.module.scss";
import { FaSearchLocation } from "react-icons/fa";
import { getActividades, getCities } from "@/app/services/generalServices";
import { AppContext } from "@/app/context/AppContext";
const Searchcard = () => {
  const { state, dispatch } = useContext(AppContext);
  const [localidades, setLocalidades] = useState([]);
  const [actividad, setActividad] = useState([]);
  const [localidadSeleccionada, setLocalidadSeleccionada] = useState("");
  const [actividadSeleccionada, setActividadSeleccionada] = useState("");

  const fetchData = async () => {
    try {
      const resLocalidad = await getCities();
      const resActividad = await getActividades();
      console.log(resActividad, "atividad");
      setLocalidades(resLocalidad);
      setActividad(resActividad);
    } catch (error) {
      console.error("Error fetching cities: ", error);
    }
  };

  const handleAction = () => {
    dispatch({
      type: "action1",
      payload: {
        localidad: localidadSeleccionada,
        actividad: actividadSeleccionada,
      },
    });
    dispatch({
      type: "action2",
      payload: true,
    });
  };

  const handleLocalidadChange = (e) => {
    setLocalidadSeleccionada(e.target.value);
  };

  const handleActividadChange = (e) => {
    setActividadSeleccionada(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${styles.cardDiv} flex`}>
      <div className="destinationInput">
        <label htmlFor="citySelect">Selecciona tu localidad</label>
        <div className="input flex">
          <select
            className={styles.select}
            id="localidadSelect"
            value={localidadSeleccionada}
            onChange={handleLocalidadChange}
          >
            {localidades.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="destinationInput">
        <label htmlFor="activitySelect">
          Selecciona tu actividad de interés
        </label>
        <div className="input flex">
          <select
            className={styles.select}
            id="activitySelect"
            value={actividadSeleccionada}
            onChange={handleActividadChange}
          >
            {actividad.map((item, index) => (
              <option key={index} value={item.key}>
                {item.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className={styles.btn} onClick={handleAction}>
        Conocer&nbsp;&nbsp;&nbsp;
        <FaSearchLocation className={styles.icon} />
      </button>
    </div>
  );
};

export default Searchcard;
