import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/ create-car.dto';
import { Car } from './interfaces/car.interface';
import { UpdateCarDto } from './dtos/ update-car.dto';



@Controller('cars')
/* @UsePipes(ValidationPipe) */
export class CarsController{

  constructor(private readonly carsService: CarsService){}


  // Obtener todos los coches
  @Get()
  getAllCars( ) {
    return this.carsService.findAllCArs()
  }



  // obtner un coche por id 
  @Get(':id')
  getCarById( @Param('id', ParseUUIDPipe, ) id:string ){

   
    return this.carsService.findCarsById(id); 
  }




  
  // le pasamos el body
  @Post()
  createCar(@Body() createCarDto:CreateCarDto ){
    
  

    const car= this.carsService.createCar(createCarDto)


    return `${car.brand} ${car.model} añadido`
    
  }

  // le pasamos el body y el parametro para manejarlos
  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id : string,
    @Body() updateCarDto: UpdateCarDto )
    {
     const car=  this.carsService.updateCar(id, updateCarDto)

     return ` El coche ${car.brand} ${car.model} ha sido actualilzado`
    }
    

  //le pasamos solo el parametro sin body en la peteicion.
  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id : string, ){
    
  const car= this.carsService.deleteCar(id)
    
  return ` El coche ${car.brand} ${car.model} ha sido eliminado`
  }
 
 






}


//cualquier parametro de la url va como strign. Si lo quisieramos pasar a otro tipo habria que convertirlo, se pueden poner varios parametros separados por , pero norepetirse
// (+id)== (Number(id))


// esto se solucna con el pipe parseIntPipe


// Al final cambiadmos el id por un UUID y para controlar que sea eso lo que recibimos como argumento utlilizamos el pide ParseUUIDPipe