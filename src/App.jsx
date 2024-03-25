import HOME from "./Views/HOME"
import Cities from "./Views/Cities"; 
import { BrowserRouter,Routes,Route } from "react-router-dom";
import CitiesDetails from "./Views/CitiesDetails";
import store from "./redux/store";
import { Provider } from "react-redux";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Views/Login"
import Registrar from "./Views/Registrar";


function App(){
  return (
  <BrowserRouter>
   <Provider store={store}> 
      <Routes>
        <Route path = "/" element={<HOME/>}/>
        <Route path = "/Ciudades" element={<Cities/>}/>
        <Route path = "/Detalles/:id" element={<CitiesDetails/>}/>
        <Route path="/Registrar" element={<Registrar/>}/>
        <Route path="/Login"element={<Login className="pt-20"/>}/>
      </Routes>
   </Provider>
   <ToastContainer/>   
</BrowserRouter>
)
};
export default App;