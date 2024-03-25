import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="bg-gradient-to-r from-cyan-600 to-sky-600">
            <header className="px-3 flex  items-center top-8 left-8 border rounded my-5 p-2 bg-blue-700">
                <img className="w-16 h-16 object-cover  border rounded  p-2 " src={props.img} alt="logo" />
                <h1 className="w-full h-16  text-black p-2 left-8 tex-lg font-semibold "> My Tinerary</h1>
                <Link className="w-16 h-8 flex-wrap text-black hover:bg-black hover:text-white  p-2 tex-lg font-semibold" to="/">HOME</Link>
                <Link className="w-16 h-8 flex-wrap text-black hover:bg-black hover:text-white  p-2 tex-lg font-semibold" to="/Ciudades">CITIES</Link>
                <Link className="w-16 h-8 flex-wrap text-black hover:bg-black hover:text-white  p-2 tex-lg font-semibold" to="/Registrar">REGISTER</Link>
                <Link className="w-16 h-8 flex-wrap text-black hover:bg-black hover:text-white  p-2 tex-lg font-semibold" to="/Login">LOGIN</Link>
                {props.children}
            </header>
        </div>
    );
};

export default Header;