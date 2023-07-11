import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsString, MinLength } from 'class-validator';

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
   //esto no tiene sentgido porque solo vamos a actualizar la unica propiedad que tiene create-brnad que es el nombre

   export class UpdateBrandDto  {


    @IsString()
    @MinLength(1)
    readonly name: string;

   }