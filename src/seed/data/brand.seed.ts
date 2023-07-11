
import { Brand } from 'src/brands/entities/brand.entity'
import {v4 as uuid} from 'uuid'


export const BRAND_SEED: Brand[]=[
    {

        id: uuid(),
        name: 'Volvo',
        createAT: new Date().getTime()
    },
    {

        id: uuid(),
        name: 'Toyota',
        createAT: new Date().getTime()
    },
    {

        id: uuid(),
        name: 'Honda',
        createAT: new Date().getTime()
    },
    {

        id: uuid(),
        name: 'Jeep',
        createAT: new Date().getTime()
    },
    {

        id: uuid(),
        name: 'Tesla',
        createAT: new Date().getTime()
    },
    
    
    
]

