import React, { useContext, useEffect, useState } from "react";
import styles from "./resultcard.module.scss";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  getActividadesDatos,
  getLocalidadesDatos,
} from "@/app/services/generalServices";
const ResultCard = ({ localidad, actividad }) => {
  // const [actividadData, setActividadData] = useState();
  const [localidadData, setLocalidadData] = useState();
  const [loading, setLoading] = useState(true);
  console.log(localidad, actividad, "props");
  const fetchData = async () => {
    try {
      const resLocalidad = await getLocalidadesDatos(localidad);
      // const resActividad = await getActividadesDatos(actividad);
      setLocalidadData(resLocalidad);
      // setActividadData(resActividad);
      setLoading(false); // Marcar como cargado cuando se obtienen los datos
    } catch (error) {
      console.error("Error fetching data", error);
      setLoading(false); // Marcar como cargado incluso si hay un error
    }
  };

  useEffect(() => {
    fetchData();
  }, [localidad, actividad]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!localidadData) {
    return <div>Error cargando datos</div>;
  }
  return (
    <div className={styles.containerResult}>
      <div className={styles.cardubicacion}>
        <h1>Acerca De</h1>
        <Card sx={{ maxWidth: 445, boxShadow: "5px 5px 15px rgba(0,0,0,0.3)" }}>
          <CardMedia
            sx={{ height: 140 }}
            title="imagen de referencia"
            image={localidadData.imagenRef}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {localidadData.nombre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {localidadData.info}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={styles.cardinteres}>
        <h1>Intereses</h1>
        <Card sx={{ maxWidth: 445, boxShadow: "5px 5px 15px rgba(0,0,0,0.3)" }}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <ul>
                <li>Vestibulum commodo felis quis tortoraaaaaaaaaaaaa.</li>
                <li>Vestibulum commodo felis quis tortoraaaaaaaaaaa.</li>
                <li>Vestibulum commodo felis quis tortoraaaaaaaaaaaa.</li>
                <li>Vestibulum commodo felis quis tortoraaaaaaaaaaaa.</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div className={styles.cardmapa}>
        <h1>Ubicacion geografica</h1>
        <div className={styles.mapacomponent}>
          <iframe
            src={localidadData.mapa}
            width="500"
            height="500"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            style={{ boxShadow: "5px 5px 15px rgba(0,0,0,0.3)" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
