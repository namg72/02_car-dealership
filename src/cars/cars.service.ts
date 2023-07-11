import { Injectable, NotFoundException} from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './dtos/ create-car.dto';
import { UpdateCarDto } from './dtos/ update-car.dto';

@Injectable()
export class CarsService {


    private cars:Car[] = [
        /* {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        }, */
        /* {
            id: uuid(),
            brand: 'Honda',
            model: 'Jazz'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Compass'
        } */
    ]
    carsFound: any;


    // Buscar  todos los coches 
    findAllCArs(){
        return this.cars
    }

    // Buscar coche por id
    findCarsById(id:string){


        const car= this.cars.find(car =>car.id === id)
       
        if(!car) {
            throw new NotFoundException(`car with id ${id} not found`)
        }
        
        
        
        return car

    }
        
        /* 
            for (let car of this.cars ){
                if (car.id === id){
                    return car
                }
            }
 */


    // Buscar coche por id
    findCarsByBrand(brand:string){


        const carsFound: Car[] = this.cars.filter(car =>car.brand ===brand)
       
        if(!carsFound) {
            throw new NotFoundException(`cars with brand: ${brand} not found`)
        }

        
        return carsFound

    }        



    //Crear coche
    createCar(createCarDto:CreateCarDto){
          const car:Car = {
              id: uuid(),
              brand: createCarDto.brand,
              model: createCarDto.model
          }

          this.cars.push(car)

          return car
       }     

                                    /* 
                    SE PUEDE USAR LA DESTRUCTURACION PARA CREARLO

                        createCar(createCarDto:CreateCarDto){
                            const car:Car = {
                                id: uuid(),
                                ...createCarDto
                            }

                            this.cars.push(car)

                            return car
                        }     

                        */



    //Actualizar coche  

    updateCar(id:string, updateCarDto : UpdateCarDto){
        
        let carDB=this.findCarsById(id)

         this.cars = this.cars.map(car => {
            
            if (car.id === id){
                   carDB= {
                        ...carDB,
                        ...updateCarDto,
                         id,
                    }
               return carDB
            }
                return car
         })
                
            return carDB       

   

         }     


                         /* 
                              para modifcar el carDB lo que hacemos es espacimos todas su propiedades ...carDB
                              y luego esparcimos las que nos vienen en updateCarDto y la sobreescribimos ya que
                              algunas son opcinales y por ultilmo para evitar que se modificaqu el id en el body
                              le sobreescribimos el id 

                              Si no enra en el if no devuelve el coche sin actualizar en caso contrio ya nos devuelve
                                el array con el coche acutalizado

                                        */

        
    //Borrar coche
    deleteCar(id:string){

        const car = this.findCarsById(id)

        this.cars = this.cars.filter(car => car.id!==id)

        return car
    }   


    //Nos traemos el arreglo de cars del seedi

    fillCarsWithSeedData(cars: Car[]){
        this.cars = cars
    }


    }

    

      

  
