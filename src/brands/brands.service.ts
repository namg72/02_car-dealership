import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import {v4 as uuid} from 'uuid'

@Injectable()
export class BrandsService {

//Simulamos una base de datos con un array de marcas

private brands:Brand[]=[

    /*   { 
        id: uuid(),

        name: 'Toyota',
    
        createAT: new Date().getTime()
      } */
]




  create(createBrandDto: CreateBrandDto) {

    const brand:Brand={
      id: uuid(),
      name: createBrandDto.name.toLowerCase(),
      createAT: new Date().getTime()
    }

    this.brands.push(brand);

    return  ` This ${createBrandDto.name} has been create in  the BD`
  }

  findAll() {
    return  this.brands;
  }

  findOne(id: string) {
    
    //verificamos si exites el id que ns llega 

    const brand = this.brands.find(brand => brand.id === id)

    if(!brand){
       throw new NotFoundException(`this ${id} is not found`)
    }

    return brand

  }



  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB = this.findOne(id);

     this.brands = this.brands.map(brand =>{
         if( brand.id === id){
            brandDB.updateAT = new Date().getTime();
            brandDB = {... brandDB, ...updateBrandDto}
            
          }    
          return brandDB
        })     

        

    return `The brand  has been update with time ${brandDB.updateAT}  `;
  }




  remove(id: string) {
 
    const brand= this.findOne(id);

    if(!brand){
      throw new NotFoundException(`the id: ${id} is not found in the BD`)
    }

      this.brands = this.brands.filter(brand => brand.id !== id)

      return ` The brand ${brand.name} has been removed from de BD`
  }

   //Nos traemos el array de marcas del seed

   fillBrandsWithSeedDate(brands: Brand[]){
      this.brands = brands
   }

 


}
