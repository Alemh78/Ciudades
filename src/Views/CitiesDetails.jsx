import Main from "../Components/Main"
import LayoutMain from "./LayoutMain"
import { getCitiesById } from "../../MyTinerary-Alejandra-Hidalgo/service/citiesQueries"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"



const CitiesDetails=(props)=>{
    const params=useParams()
const[Ciudades,setCiudades]=useState({});
const[cargando, setCargando]=useState(true);
const navigate =useNavigate();

useEffect(()=>{
        getCitiesById(params._id)
        .then((res)=>{ 
        if (res.Ciudades){
            setCiudades(res.Ciudades);
        }else{
            alert("City not available");
    navigate("/Ciudades")

}console.log(Ciudades)
        })
 .finally(()=>setCargando(false));      
},[]);
if(cargando){
    return( 
    <div className="grow pt-20">
    <h2 className="pt-20 text-4xl text-black"></h2>
    </div>
);
   
}

return (


<LayoutMain foter="Alejandra Hidalgo-My tinerary" titulo="DETAILS" bg=" bg-gradient-to-r from-cyan-600 to-blue-600"  content="bg-cyan-700" >
    <Main>
           <div>
            <h2 className="pt-20 text-4xl text-black">{Ciudades.name}</h2>
            <img className="objet-cover" src={Ciudades.image
} alt={"Imagen de" + Ciudades.name
}></img>
            </div> 
    </Main>
</LayoutMain>
    );
};

export default CitiesDetails