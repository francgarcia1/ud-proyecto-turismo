import { Controller, Get, Param } from "@nestjs/common";
import { ActividadesServicios } from "./actividades.service";

@Controller({})
export class ActividadesController {
  constructor(private actividadesService: ActividadesServicios) {}

  @Get("/actividades")
  getActividades() {
    return this.actividadesService.getListaActividades();
  }
  @Get("/actividadesDatos/:nombre/:actividad")
  getActividadesDatos(
    @Param("nombre") nombre: string,
    @Param("actividad") actividad: string
  ) {
    return this.actividadesService.getActividadesDatos(nombre, actividad);
  }
}
