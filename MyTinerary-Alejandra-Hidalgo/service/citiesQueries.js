import axios from "axios";


export const getCities= async() =>{
    try {
        const respuesta= await axios("http://localhost:4000/api/cities")
        return respuesta.data
    
    } catch (err) {
       return []
        
    }
   return[]

};

export const getCitiesById= async(_id) =>{
    try {
        const respuesta= await axios(`http://localhost:4000/api/cities` + _id)
        return respuesta.data.Ciudades
    
    } catch (err) {
       return []
        
    }
   return[]

};