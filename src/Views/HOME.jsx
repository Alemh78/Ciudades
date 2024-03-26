import { Link } from "react-router-dom";
import Main from "../Components/Main";
import LayoutMain from "../Components/LayoutMain";
import React, { useState } from "react";
import { Ciudades } from "../Components/Ciudades";
import Carrusel from "../Components/Carrusel";

const HOME=(props) =>{
   const ciudad = Ciudades.slice(0, 13);
    const [lugares1, setLugares1] = useState(ciudad[0]);
    const [lugares2, setLugares2] = useState(ciudad[5]); 
    const [lugares3, setLugares3] = useState(ciudad[9]); 
    const [indice1, setIndice1] = useState(0);
    const [indice2, setIndice2] = useState(5); 
    const [indice3, setIndice3] = useState(9); 

    const next1 = () => {
        let aux = indice1 === 4 ? 0 : indice1 + 1;
        setIndice1(aux);
        setLugares1(ciudad[aux]);
    };

    const prev1 = () => {
        let aux = indice1 === 0 ? 4 : indice1 - 1;
        setIndice1(aux);
        setLugares1(ciudad[aux]);
    };

    
    const next2 = () => {
        let aux = indice2 === 8 ? 5 : indice2 + 1;
        setIndice2(aux);
        setLugares2(ciudad[aux]);
    };

    const prev2 = () => {
        let aux = indice2 === 5 ? 8 : indice2 - 1;
        setIndice2(aux);
        setLugares2(ciudad[aux]);
    };

    const next3 = () => {
        let aux = indice3 === 12 ? 9 : indice3 + 1;
        setIndice3(aux);
        setLugares3(ciudad[aux]);
    };

    const prev3 = () => {
        let aux = indice3 === 9 ? 12 : indice3 - 1;
        setIndice3(aux);
        setLugares3(ciudad[aux]);
    };
   
return( 

    <LayoutMain titulo="MY TINERARY" bg=" bg-gradient-to-r from-cyan-600 to-blue-600" img="src/assets/mundo.jpg"
    content="bg-gradient-to-r from-cyan-600 to-sky-600 w-full min-h-full" foter="Alejandra Hidalgo-My tinerary">
       <Main imagen="src/assets/isla.jpg" claseMain="w-full max-h-full bg-cyan-700">
        <main className="bg-gradient-to-r from-cyan-600 to-sky-600">
       <div className="grow mt-10 mb-10 ml-5 inline-flex items-center justify-center  bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l flex justify- items-center " onClick={prev1}>prev</button>
        <Carrusel lugares={lugares1}/>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={next1}>next</button>
        </div>
        
        <div className=" grow ml-5 inline-flex items-center justify-center  bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <button className="bg-gray-300   hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 gap-4 rounded-l" onClick={prev2}>prev</button>
        <Carrusel lugares={lugares2} />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={next2}>next</button>
        </div>
        
        <div className="grow ml-5 inline-flex items-center justify-center  bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4  rounded-l" onClick={prev3}>prev</button>
        <Carrusel lugares={lugares3} />
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" onClick={next3}>next</button> 
        </div>
        </main>
      </Main>
</LayoutMain>
   
   );   
  };
  


export default HOME
