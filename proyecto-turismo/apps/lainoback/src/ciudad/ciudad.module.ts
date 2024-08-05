import { Module } from "@nestjs/common";
import { CiudadController } from "./ciudad.controller";
import { CiudadServicio } from "./ciudad.service";

@Module({
  providers: [CiudadServicio],
  controllers: [CiudadController],
})
export class CiudadModule {}
