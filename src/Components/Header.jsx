import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className="bg-gradient-to-r from-cyan-600 to-sky-600">
            <header className="px-3 flex  items-center top-8 left-8 border rounded my-5 p-2 bg-blue-700">
                <img className="w-16 h-16 object-cover  border rounded  p-2 " src={props.img} alt="logo" />
                <h1 className="w-full h-16  text-black p-2 left-8 tex-lg font-semibold "> My Tinerary</h1>
                <Link className="text-black hover:bg-black hover:text-white px-4 py-2 font-semibold rounded" to="/">HOME</Link>
                <Link className="text-black hover:bg-black hover:text-white px-4 py-2 font-semibold rounded" to="/Ciudades">CITIES</Link>
                <Link className="text-black hover:bg-black hover:text-white px-4 py-2 font-semibold rounded"to="/Registrar">REGISTER</Link>
                <Link className="text-black hover:bg-black hover:text-white px-4 py-2 font-semibold rounded" to="/Login">LOGIN</Link>
                {props.children}
            </header>
        </div>
    );
};

export default Header;