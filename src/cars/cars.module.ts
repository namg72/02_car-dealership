import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarsControllerBrand } from './carsBrand.controller';

@Module({
  controllers: [CarsController, CarsControllerBrand],
  providers: [CarsService]

})
export class CarsModule {}
