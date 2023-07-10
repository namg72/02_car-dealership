import { IsString } from "class-validator";

export class CreateCarDto{

    @IsString() 
    readonly brand: string;

    @IsString({message:'The model most be a string'}) 
    readonly model: string;


}