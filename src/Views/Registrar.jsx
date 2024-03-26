
import { Link } from "react-router-dom";
import { useState } from "react"; 
import LayoutMain from "../Components/LayoutMain";

function Registrar() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        country: "",
        image: "",
        description:"",
    });
    
    const [savedData, setSavedData] = useState(null);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formattedData = `
            First Name: ${formData.first_name}
            Last Name: ${formData.last_name}
            Email: ${formData.email}
            Password: ${formData.password}
            Country: ${formData.country}
            Image URL: ${formData.image}
        `;
        if (window.confirm("¿Son estos los datos correctos?\n" + formattedData)) {
            console.log("Guardando datos...");
          
            setSavedData(formData);
        } else {
            console.log("Corrigiendo datos...");
        }
    };
    return (

        <LayoutMain>
            <div>
            <Link to="/Header"></Link>
            <main className="grow flex justify-center bg-blue-500">
                <div className="border border-black w-10/12 bg-white rounded-lg">
                    <div>
                    <input type="text" id="username" name="username" autoComplete="username"/>
                    </div>
                    <form className="p-8" onSubmit={handleSubmit}>
                        <div className="mb-4">
                                <input
                                    className="border border-black w-full h-10 outline-none rounded-lg px-3"
                                    type="text"
                                    placeholder="First name"
                                    name="first_name"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            
                            <div className="mb-4">
                                <input
                                    className="border border-black w-full h-10 outline-none rounded-lg px-3"
                                    type="text"
                                    placeholder="Last name"
                                    name="last_name"
                                    value={formData.last_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border border-black w-full h-10 outline-none rounded-lg px-3"
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="border border-black w-full h-10 outline-none rounded-lg px-3"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                           
                            <div className="mb-4">
                                <select
                                    name="country"
                                    className="border border-black w-full h-10 outline-none rounded-lg px-3"
                                    value={formData.country}
                                    onChange={handleInputChange}
                                >
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
                                    placeholder="URL image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="mb-4">
                            <input
                                    className="border border-black w-full h-10 outline-none rounded-lg px-3"
                                    type="text"
                                    placeholder="description"
                                    name="description"
                                    value={formData.first_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Register
                            </button>
                            <div className="p-4">
                    <Link to="/Login" className="text-blue-500 hover:text-blue-700">Already have an account? Login</Link>
                </div>
                        </form>
                        {savedData && (
                            <div className="p-4">
                                <h2>Datos guardados:</h2>
                                <p>First Name: {savedData.first_name}</p>
                                <p>Last Name: {savedData.last_name}</p>
                                <p>Email: {savedData.email}</p>
                                <p>Country: {savedData.country}</p>
                                <p>Image URL: {savedData.image}</p>
                            </div>
                        )}
                    </div>
                </main>
                <footer className="bg-blue-500 text-white text-center py-4">
                    Alejandra Hidalgo-My Tinerary
                </footer>
            </div>
        </LayoutMain>
    );
}

export default Registrar;