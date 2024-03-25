import { Link } from "react-router-dom";

function Registrar() {
    return ( 
        <div>
        <main className="grow flex justify-center bg-teal-400">
            <div className="border border-black w-10/12 bg-white rounded-lg">
                <form className="p-8">
                    <div className="mb-4">
                        <input 
                            className="border border-black w-full h-10 outline-none rounded-lg px-3"
                            type="text" 
                            placeholder="First name" 
                            name="first name"/>
                    </div>
                    <div className="mb-4">
                        <input
                            className="border border-black w-full h-10 outline-none rounded-lg px-3" 
                            type="text" 
                            placeholder="Last name" 
                            name="last name"/>
                    </div>
                    <div className="mb-4">
                        <input
                            className="border border-black w-full h-10 outline-none rounded-lg px-3"
                            type="email" 
                            placeholder="Email" 
                            name="email"/>
                    </div>
                    <div className="mb-4">
                        <input 
                            className="border border-black w-full h-10 outline-none rounded-lg px-3"
                            type="password" 
                            placeholder="Password" 
                            name="password"/>
                    </div>
                    <div className="mb-4">
                        <select 
                            name="country" 
                            className="border border-black w-full h-10 outline-none rounded-lg px-3">
                            <option value="">Select country</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Chile">Chile</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Brasil">Brasil</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <input
                            className="border border-black w-full h-10 outline-none rounded-lg px-3" 
                            type="text" 
                            name="image" 
                            placeholder="URL image" />
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Register
                    </button>
                </form>
                <div className="p-4">
                    <Link to="/Login" className="text-blue-500 hover:text-blue-700">Already have an account? Login</Link>
                </div>
            </div>
        
        </main>
        <footer className="bg-blue-500 text-white text-center py-4">
                Alejandra
            </footer>
        </div> 
    );
}

export default Registrar;