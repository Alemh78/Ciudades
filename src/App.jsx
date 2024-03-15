import HOME from "./Views/HOME"
import Cities from "./Views/Cities";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App(){
  return (
  <BrowserRouter>
   
      <Routes>
        <Route path = "/" element={<HOME/>}/>
        <Route path = "/Ciudades" element={<Cities/>}/>
      </Routes>
   
</BrowserRouter>
)
};
export default App;