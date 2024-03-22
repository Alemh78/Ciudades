import Main from "../Components/Main"; 
import LayoutMain from "./LayoutMain";
import { useState,useEffect,useRef } from "react";
import { getCities } from "../service/citiesQueries";
import Carrusel from "../Components/Carrusel";
import { Link } from "react-router-dom";


const Cities=() =>{
    const[Ciudades,setCiudades]=useState([]);
    const [filtradas,setfiltradas]=useState([])
    const buscar=useRef(null)



    useEffect(()=>{
        getCities().then(Respuesta=>{
            setCiudades(Respuesta.data);  
        setfiltradas(Respuesta.data);
    });
    },[]);

    const handleImput=()=>{
        const filteredCities=filterByName(Ciudades,buscar.current.value);
        setfiltradas(filteredCities);

    };


    const filterByName=(Ciudadlista,value)=>(
    Ciudadlista.filter((ciudad)=>
    ciudad.name.toLowerCase().startsWith(value.toLowerCase())
    ));

    const renderCiudades = Array.isArray(filtradas) ? filtradas.map((ciudad) => (
        <div key={ciudad._id} className="relative object-cover bg-black  bottom-0 left-0  bg-opacity-80
         text-white p-2 text-xl font-bold  rounded-black ">
            <Carrusel lugares={ciudad} imageSize="min-h-full w-full object-cover" />
            <div>
            <Link to={"/Detalles/" + ciudad._id} className="text-white p-2  font-bold text-sm rounded-black">DETALLES</Link>
            </div>
        </div>
    )) : (
        <div>
            <Link to="/Detalles" >DETAILS</Link>
        </div>);


    

   
    
   return (
    <LayoutMain foter="Alejandra Hidalgo-My tinerary" titulo="Cities" 
    bg=" bg-gradient-to-r from-cyan-600 to-blue-600"  content="bg-cyan-700" img="src/assets/mundo.jpg"> 
        <Main >
            <p className="mx-8 -mt-12 mb-8">Buscar</p>
           <search className="w-80 border-black  mx-24 -mt-12 mb-8 bg-white border rounded text-black "  >
              <input 
              type="text"
              name="name_lugares"
              className="rounded text-black outline-none"
              onInput={handleImput}
              ref={buscar}
              />
           </search>
           <section className=" grid grid-cols-3 gap-4 my-4 mt-4 h-auto w-full">
           {renderCiudades}
           </section>
           
        
         </Main>
    </LayoutMain>
     

    )
}
export default Cities