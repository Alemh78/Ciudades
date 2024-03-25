import { useParams } from "react-router-dom";
import Main from "../Components/Main";
import LayoutMain from "../Components/LayoutMain";                         
import { useEffect, useState } from "react";
import { getCitiesById } from "../service/citiesQueries";

const CitiesDetails = (props) => {
  const params = useParams();
  const [cityDetails, setCityDetails] = useState({}); 

  useEffect(() => {
    getCitiesById(params.id)
      .then((res) => {
        setCityDetails(res.data); 
       
      })
      }, [params.id]);
      
      
  return (
    <LayoutMain footer="Alejandra Hidalgo-My tinerary" titulo="DETAILS" 
    bg=" bg-gradient-to-r from-cyan-600 to-blue-600" content="bg-cyan-700">
      <Main>

        <div className="text-black p-2 text-sm font-bold rounded-black bg-blue-400 relative object-cover">
          <h2 className="text-center text-3xl">{cityDetails.name}</h2>
          <p className="text-center text-xl">{cityDetails.country}</p>
          <img src={cityDetails.image} alt={cityDetails.name} className="w-full object-cover" />
          <p className="text-center text-2xl">Description:</p>
          <h2 className="text-center text-xl">{cityDetails.description}</h2>
        </div>
        
    {cityDetails.itineraries && cityDetails.itineraries.map((itinerary, index) => (
        <div className="grid  my-4  h-auto w-fullgrid grid-cols-1 gap-2 mt-10 ">
         
    <div className="border border-gray-600 p-4 rounded-md 
    object-cover  text-xl font-bold rounded-black ">
     <img src={itinerary.guide_image} alt={itinerary.guide} className="w-20 h-20 rounded-full mx-auto " />
     <p className="text-center font-bold">{itinerary.title}</p>
     <div className="flex justify-center">
       {[...Array(itinerary.price)].map((_, i) => (
         <img key={i} src="../src/assets/dollar.jpg" alt="Billetito" className="w-10 h-6 object-cover" />
       ))}
     </div>
     <p className="text-center">Duration: {itinerary.duration} hours</p>
     <p className="text-center">Likes: {itinerary.likes ? itinerary.likes.length : 0}</p>
     <p className="text-center">Hashtags: {itinerary.hashtags.join(', ')}</p>
     <div className="flex justify-center ">
     {itinerary.activities.map((activity) => (
  <img key={activity.id} src={activity.image} alt={activity.name} className="w-24 h-24 mx-1 relative object-cover  bottom-0 left-0  bg-opacity-80 p-2 text-xl font-bold  rounded-black " />
))}
     </div>
   </div>
 
</div>
))}
       </Main>
    </LayoutMain>
  );
};

export default CitiesDetails;