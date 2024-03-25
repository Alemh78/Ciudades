import { createAction } from '@reduxjs/toolkit';
import { Ciudades } from '../../Components/Ciudades';
 

const agregarCiudades=createAction(`agregarCiudades`,()=>{
    return{
           payload:Ciudades
    }
})

export default agregarCiudades