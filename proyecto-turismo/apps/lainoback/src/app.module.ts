import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CiudadModule } from './ciudad/ciudad.module';
import { ActividadesModule } from './actividades/actividades.module';

@Module({
  imports: [CiudadModule, ActividadesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
