import { Module } from "@nestjs/common";
import { ActividadesServicios } from "./actividades.service";
import { ActividadesController } from "./actividades.controller";

@Module({
  providers: [ActividadesServicios],
  controllers: [ActividadesController],
})
export class ActividadesModule {}
