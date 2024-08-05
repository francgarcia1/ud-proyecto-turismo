import { Injectable } from "@nestjs/common";

@Injectable()
export class CiudadServicio {
  getLocalidad() {
    return ["Chapinero", "Usaquen", "Teusaquillo"];
  }
  private localidadesBogota = [
    {
      nombre: "Chapinero",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31813.543927524748!2d-74.05079759021262!3d4.648740525497754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f909e88bf0583%3A0xcee402e0b005bc73!2sLocalidad%20de%20Chapinero%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1713672299107!5m2!1ses-419!2sco",
      imagenRef:
        "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SY4JRRQ5AAI6VF32CWTHCDWW3I.jpg",
      info: "El barrio Chapinero en la ciudad de Bogotá es una de las zonas más icónicas y versátiles de la ciudad. Es conocido por su mezcla de elementos culturales, comerciales y residenciales. En la zona norte de Chapinero se encuentra una parte de la Zona G, un sector reconocido por sus restaurantes y vida nocturna.",
    },
    {
      nombre: "Teusaquillo",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12994.933965152264!2d-74.09064346452911!3d4.660999436485606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9beaa5647337%3A0x6fa358372e109359!2sTeusaquillo%2C%20Bogot%C3%A1!5e0!3m2!1ses-419!2sco!4v1716787372757!5m2!1ses-419!2sco",

      imagenRef:
        "https://static.roadtrip.travel/media/roadtrips/senderismo-urbano-historia-y-arquitectura-de-teusaquillo-1200-cbdcf9c.jpg",
      info: "La localidad de Teusaquillo tiene un valor histórico y arquitectónico que vale la pena conocer. Teusaquillo fue habitado por la clase alta capitalina al desplazarse esta del centro histórico de la ciudad, tendencia estimulada por los hechos del Bogotozo en 1948. ",
    },
    {
      nombre: "Usaquen",
      mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10020.058134391466!2d-74.0528101394982!3d4.689357453165586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8f805d4e5beb%3A0x853611c42477c6f!2zVXNhcXXDqW4sIEJvZ290w6E!5e0!3m2!1ses-419!2sco!4v1716787229347!5m2!1ses-419!2sco",
      imagenRef:
        "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/SY4JRRQ5AAI6VF32CWTHCDWW3I.jpg",
      info: "Usaquén es la localidad número uno del Distrito Capital de Bogotá. Se encuentra ubicada en el norte de la ciudad. Fue un antiguo municipio del Departamento de Cundinamarca, cuyo origen se remonta a la época precolombina.",
    },
  ];

  getLocalidadesDatos(nombre: string) {
    const localidad = this.localidadesBogota.find(
      (l) => l.nombre.toLowerCase() === nombre.toLowerCase(),
    );
    if (!localidad) {
      throw new Error(`Localidad con nombre ${nombre} no encontrada`);
    }
    return localidad;
  }
}
