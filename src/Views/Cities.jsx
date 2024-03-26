import Main from "../Components/Main"; 
import LayoutMain from "../Components/LayoutMain";
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

    const handleInput=()=>{
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
            <main className="bg-gradient-to-r from-cyan-600 to-blue-600">
        <div>
      <p className="mx-8 -mt-12 mb-8">Buscar</p>
      <div className=" mx-24 -mt-12 mb-8 relative flex w-full max-w-[14rem] border rounded text-black">
      <svg class="h-8 w-8 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
</svg>

        <input
          type="text"
          name="name_lugares"
          onInput={handleInput} 
          ref={buscar}
        />
      </div>
    </div>
           <section className=" grid grid-cols-3 gap-4 my-4 mt-4 h-auto w-full">
           {renderCiudades}
           </section>
           </main>
        
         </Main>
    </LayoutMain>
     

    )
}
export default Cities