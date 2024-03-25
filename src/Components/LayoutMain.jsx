import Header from "../Components/Header";
import Footer from "../Components/Footer";
import BanerYTitulo from "../Components/BanerYTitulo";
import { Link } from "react-router-dom";

function LayoutMain(props) {
  return (
    <div className="w-full min-h-screen  flex flex-col ">
      <Header></Header>
      <BanerYTitulo Imagen={props.Imagen} titulo={props.titulo} bg={props.bg} />
      {props.children}
     
      <Footer></Footer>
    </div>
  );
}

export default LayoutMain;