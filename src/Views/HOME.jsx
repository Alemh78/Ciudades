import Main from "../Components/Main";
import LayoutMain from "./LayoutMain";
import React, { useState } from "react";


const HOME=(props) =>{return( 

    <LayoutMain titulo="MY TINERARY" bg=" bg-gradient-to-r from-cyan-600 to-blue-600" 
    content="bg-gradient-to-r from-cyan-600 to-sky-600 w-full min-h-full" foter="Alejandra Hidalgo-My tinerary">
       <Main imagen="src/assets/isla.jpg" >
       </Main>
</LayoutMain>
   
   );   
  };
  


export default HOME
