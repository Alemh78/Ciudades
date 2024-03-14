import Main from "../Components/Main";
import LayoutMain from "./LayoutMain";
import React, { useState } from "react";
import {Ciudades} from "../Components/Ciudades";
import Carrusel from "../Components/Carrusel";

const HOME=() =>{
    const ciudad = Ciudades.slice(0,12);
    const [lugares,setLugares] = useState(ciudad[0]);
    const[indice,setIndice]=useState(0)
   
    console.log(Ciudades);
    const next=()=>{
        let aux= indice == ciudad.length -1 ? 0 : indice + 1 ;
        setIndice(aux);
        setLugares(ciudad[aux])

    }
    const prev=()=>{
        let aux=indice == 0 ? ciudad.length -1 : indice -1;
        setIndice(aux)
        setLugares(ciudad[aux])
    }
   
     return( 
     <LayoutMain >
        <Main>
        
        <div>
            <button className="text-3xl" onClick={prev}>prev
            </button>
            <Carrusel lugares={lugares}/>
            <button className="text-3xl" onClick={next}>next
            </button>

        </div>
        </Main>
</LayoutMain>
    
    );   
   
};
export default HOME
