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
import { useEffect } from "react";
import authQueries from "./service/authQueries";


function App() {
  useEffect(() => {
    
    const authenticateUser = async () => {
      try {
        const res = await authQueries.loginWhithToken();
        console.log('Autenticación exitosa:', res);
      } catch (error) {
        console.error('Error al autenticar al usuario:', error);
      }
    };
    authenticateUser();
  }, []);
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