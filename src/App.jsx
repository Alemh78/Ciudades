import HOME from "./Views/HOME"
import Cities from "./Views/Cities";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CitiesDetails from "./Views/CitiesDetails";

function App(){
  return (
  <BrowserRouter>
   
      <Routes>
        <Route path = "/" element={<HOME/>}/>
        <Route path = "/Ciudades" element={<Cities/>}/>
        <Route path = "/Detalles/:_id" element={<CitiesDetails/>}/>
      </Routes>
   
</BrowserRouter>
)
};
export default App;