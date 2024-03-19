import Main from "../Components/Main"; 
import LayoutMain from "./LayoutMain";
import { useState,useEffect,useRef } from "react";
import { getCities } from "../../MyTinerary-Alejandra-Hidalgo/service/citiesQueries";
import Carrusel from "../Components/Carrusel";
import { data } from "autoprefixer";


const Cities=() =>{
    const[Ciudades,setCiudades]=useState([]);
    const [filtradas,setfiltradas]=useState([])
    const buscar=useRef(null)



    useEffect(()=>{
        getCities().then(Respuesta=> setCiudades(Respuesta.data))  
        setfiltradas(data)
    },[]);

    const handleImput=()=>{
        const aux2=filterByName(Ciudades,buscar.current.value);
        setfiltradas(aux2);

    };


    const filterByName=(Ciudadlista,value)=>
    Ciudadlista.filter((ciudad)=>
    ciudad.name.tolowerCase().startsWith(value.tolowerCase()));

const renderCiudades= Ciudades.map((ciudad)=> (<Carrusel key={Ciudades._id}lugares={ciudad}/>))


    
   return (
    <LayoutMain foter="Alejandra Hidalgo-My tinerary" titulo="Cities" bg="bg-cyan-700" content="bg-cyan-700"> 
        <Main >
           <search className="w-full h-9 border-black border-[3px] flex justify-center items-center">
              <input 
              type="text"
              name="name_lugares"
              className="w-3/4 rounded text-black outline-none"
              onInput={handleImput}
              ref={buscar}
              />
           </search>
           <section className="  w-70 space-x-5 border-black border-[3px] ">
           {Ciudades.length > 0 && renderCiudades}
           </section>

        
         </Main>
    </LayoutMain>
     

    )
}
export default Cities