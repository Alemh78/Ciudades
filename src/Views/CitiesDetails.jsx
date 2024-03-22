import { useParams } from "react-router-dom";
import Main from "../Components/Main";
import LayoutMain from "./LayoutMain";
import { useEffect, useState } from "react";
import { getCitiesById } from "../service/citiesQueries";

const CitiesDetails = (props) => {
  const params = useParams();
  const [cityDetails, setCityDetails] = useState({}); 

  useEffect(() => {
    getCitiesById(params.id)
      .then((res) => {
        setCityDetails(res.data); 
        console.log(res);
      })
      }, [params.id]);
      
      
  return (
    <LayoutMain footer="Alejandra Hidalgo-My tinerary" titulo="DETAILS" 
    bg=" bg-gradient-to-r from-cyan-600 to-blue-600" content="bg-cyan-700">
      <Main>

        <div className="text-black p-2 text-sm font-bold rounded-black bg-blue-400">
          <h2 className="text-center text-3xl">{cityDetails.name}</h2>
          <p className="text-center text-xl">{cityDetails.country}</p>
          <img src={cityDetails.image} alt={cityDetails.name} className="w-full object-cover" />
          <p className="text-center text-2xl">Description:</p>
          <p className="text-center text-xl">{cityDetails.description}</p>
        </div>
        
      </Main>
    </LayoutMain>
  );
};

export default CitiesDetails;