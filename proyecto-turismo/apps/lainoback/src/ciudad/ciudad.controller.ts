import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from "@nestjs/common";
import { CiudadServicio } from "./ciudad.service";

@Controller({})
export class CiudadController {
  ciudadService: CiudadServicio;
  constructor(ciudadService: CiudadServicio) {
    this.ciudadService = ciudadService;
  }
  @Get("/localidades")
  getAllCites() {
    return this.ciudadService.getLocalidad();
  }

  @Get("/localidadesDatos/:nombre")
  getCitiesFacts(@Param("nombre") nombre: string) {
    try {
      const result = this.ciudadService.getLocalidadesDatos(nombre);
      return result;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
