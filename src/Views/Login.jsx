import React, { useState } from 'react';
import LayoutMain from "../Components/LayoutMain";
import { login } from '../service/authQueries';


function Login() {
    const [formData, setFormData] = useState({
         email: "",
        password: "",
      });

    const [error, setError] = useState(null); 

   

    function handleInputChange(e){
      const name=e.target.name
      const value=e.target.value
      setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await login(formData);
            console.log(response);
            if (response.success) {
                console.log("Inicio de sesión exitoso!");
            
            } else {
                setError(response.message || "Error al iniciar sesión.");
            }
        } catch (error) {
            console.error("Error:", error);
            setError("Error en la solicitud");
        }
    };
   
        return (
            <LayoutMain>
                <div className="flex justify-center items-center h-full bg-blue-500">
                    <main className="w-full max-w-md p-6 bg-white rounded-lg shadow-md
                    mt-20 border-black border-[1px]">
                        <h2 className="text-2xl font-bold mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 mt-1 text-sm  rounded-md
                                     focus:outline-none focus:ring focus:ring-blue-500  border-black border-[1px]"
                                    placeholder="Correo electrónico"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 mt-1 text-sm  rounded-md
                                    border-black border-[1px] focus:outline-none focus:ring focus:ring-blue-500"
                                    placeholder="Contraseña"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 mt-2 text-sm font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
                            >
                                Iniciar sesión
                            </button>
                        </form>
                        {error && <p className="mt-4 text-red-500">{error}</p>}
                    </main>
                    
                </div>
                <footer className="bg-blue-500 text-white text-center py-4">
                        Alejandra Hidalgo-My Tinerary
                </footer>
            </LayoutMain>
        );
    }
    
    export default Login;