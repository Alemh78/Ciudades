import { Link } from "react-router-dom";

const Header=(props)=>{
    return(
      <div className="bg-gradient-to-r from-cyan-600 to-sky-600">
        <header className="px-3 flex  items-center top-8 left-8 border rounded my-5 p-2 bg-blue-700">
<img className="w-16 h-16 object-cover flex-wrap text-black hover:bg-black hover:text-white border rounded  p-2 " src="src/assets/city-silhouette-png-8.png" alt="logo" />
<h1 className="w-full h-16  text-black p-2 left-8 tex-lg font-semibold "> My Tinerary</h1>
<nav className="flex  justify-end  cursor-pointer">
  <Link className="w-16 h-8 flex-wrap text-black hover:bg-black hover:text-white left-8 p-2 tex-lg font-semibold" to ="/">HOME</Link>
  <Link className="w-16 h-8 flex-wrap text-black hover:bg-black hover:text-white  p-2 tex-lg font-semibold" to ="/Ciudades">CITIES</Link>
  <a className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600" href="#"><img src=""></img></a>
</nav>


      </header>
      </div>
    )
};

export default Header