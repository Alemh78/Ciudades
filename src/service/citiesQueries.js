import axios from "axios";


export const getCities= async() =>{
    try {
        const respuesta= await axios("http://localhost:4000/api/cities")
        return respuesta.data
    
    } catch (err) {
       return []
        
    }

};

export const getCitiesById= async(id) =>{
    try {
        const respuesta= await axios(`http://localhost:4000/api/cities/`+ id)
        return respuesta.data
    
    } catch (err) {
       return {}
        
    }

};




