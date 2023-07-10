import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/ create-car.dto';
import { Car } from './interfaces/car.interface';
import { UpdateCarDto } from './dtos/ update-car.dto';


@Controller('cars/brand')
/* @UsePipes(ValidationPipe) */
export class CarsControllerBrand{
  
  constructor(private readonly carsService:CarsService){}

  @Get(':brand')
  getCarByBrand( @Param('brand') brand:string ){

   
    return this.carsService.findCarsByBrand(brand); 
  }
 

}
//cualquier parametro de la url va como strign. Si lo quisieramos pasar a otro tipo habria que convertirlo, se pueden poner varios parametros separados por , pero norepetirse
// (+id)== (Number(id))


// esto se solucna con el pipe parseIntPipe


// Al final cambiadmos el id por un UUID y para controlar que sea eso lo que recibimos como argumento utlilizamos el pide ParseUUIDPipe