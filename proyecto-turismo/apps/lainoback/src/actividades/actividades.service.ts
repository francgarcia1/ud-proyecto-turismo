import { Injectable } from "@nestjs/common";

@Injectable()
export class ActividadesServicios {
  getListaActividades() {
    return [
      { nombre: "Salir a Comer", key: "saliracomer" },
      { nombre: "Culturales", key: "culturales" },
      { nombre: "Salud", key: "salud" },
    ];
  }

  private ActividadesLocalidadesBogota = {
    Usaquen: {
      culturales: [
        "Mercado de las Pulgas",
        "Hacienda Santa Bárbara",
        "Parque de Usaquén",
      ],
      salud: ["Ciclovía Usaquén", "Parque El Country", "Club de Golf"],
      saliracomer: ["Zona G", "Restaurantes en Usaquén", "Bares en Usaquén"],
    },
    Chapinero: {
      culturales: [
        "Museo del Chicó",
        "Teatro Nacional Fanny Mikey",
        "Galería Casa Cuadrada",
      ],
      salud: [
        "Gimnasios en Chapinero",
        "Parque de los Hippies",
        "Ciclovía Chapinero",
      ],
      saliracomer: ["Zona T", "Andrés Carne de Res", "Bares en la Zona Rosa"],
    },
  };

  buscarActividades(localidad, tipoActividad) {
    if (this.ActividadesLocalidadesBogota[localidad]) {
      if (this.ActividadesLocalidadesBogota[localidad][tipoActividad]) {
        return this.ActividadesLocalidadesBogota[localidad][tipoActividad];
      } else {
        return `No hay actividades de tipo ${tipoActividad} en ${localidad}.`;
      }
    } else {
      return `La localidad ${localidad} no está en la lista.`;
    }
  }
  getActividadesDatos(nombre: string, actividad: string) {
    nombre = nombre.replace(/^:/, "");
    actividad = actividad.replace(/^:/, "");
    const localidad = this.buscarActividades(nombre, actividad);
    if (!localidad) {
      throw new Error(`Localidad con nombre ${nombre} no encontrada`);
    }
    return localidad;
  }
}
