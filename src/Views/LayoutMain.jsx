import Header from "../Components/Header"
import Footer from "../Components/Footer"
import BanerYTitulo from "../Components/BanerYTitulo"


function LayoutMain(props) {
    return (
        <div className="w-full min-h-screen width: 1728px height: 558.5px  flex flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
            <Header></Header>
            <BanerYTitulo Imagen={props.Imagen} titulo={props.titulo}></BanerYTitulo>
            {props.children}
            <Footer></Footer>

        </div>

    )
}
export default LayoutMain