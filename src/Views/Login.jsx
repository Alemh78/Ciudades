import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LayoutMain from "../Components/LayoutMain";
import { login } from '../service/authQueries';


function Login() {
    const [formData, setFormData] = useState({
         email: "",
        password: "",
      });

    const [error, setError] = useState(null);  
    const Navigate=useNavigate();
    function handleInputChange(e){
      const name=e.target.name
      const value=e.target.value
      const aux={...formData};
      aux[name]=value;
      setFormData(aux);

    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await login(formData);
            console.log(response);
            if (response.status === 201) {
                console.log("Registro exitoso!");
                Navigate("/");
            } else {
                setError(response.statusMsg || "Error al registrar.");
            }
        } catch (error) {
            console.error("Error:", error);
             setError("Error en la solicitud");
     
        }
    }

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
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </main>
                <footer className="bg-blue-500 text-black text-center py-4">
                    Alejandra Hidalgo-My Tinerary
                </footer>
            </div>
            {formData && (
                <div className="p-8 bg-blue-500 text-black">

                    <h2>Datos guardados:</h2>
                              <p>Email: {formData.email}</p>
                                
                </div>
            )}
        </LayoutMain>
    );
}

export default Login;