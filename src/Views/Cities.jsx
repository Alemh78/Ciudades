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
        getCities().then(Respuesta=>{
            setCiudades(Respuesta.data);  
        setfiltradas(data);
    });
    },[]);

    const handleImput=()=>{
        const aux2=filterByName(Ciudades,buscar.current.value);
        setfiltradas(aux2);

    };


    const filterByName=(Ciudadlista,value)=>(
    Ciudadlista.filter((ciudad)=>
    ciudad.name.toLowerCase().startsWith(value.toLowerCase())
    ));

    const renderCiudades = Array.isArray(filtradas) ? filtradas.map((ciudad) => (
        <div key={ciudad._id} className="relative bg-cyan-800  bottom-0 left-0 w-full  bg-opacity-80 text-white p-2text-xl font-bold text-sm ">
            <Carrusel lugares={ciudad} className="h-full" />
        </div>
    )) : null;


    

   
    
   return (
    <LayoutMain foter="Alejandra Hidalgo-My tinerary" titulo="Cities" bg=" bg-gradient-to-r from-cyan-600 to-blue-600"  content="bg-cyan-700"> 
        <Main >
           <search className=" border-black border-[3px] flex items-center">
              <input 
              type="text"
              name="name_lugares"
              className="w-3/4 rounded text-black outline-none"
              onInput={handleImput}
              ref={buscar}
              />
           </search>
           <section className=" grid grid-cols-3 gap-4 my-4 h-auto max-w-full">
           {filtradas.length > 0 && renderCiudades}
           </section>
           
        
         </Main>
    </LayoutMain>
     

    )
}
export default Cities