import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LayoutMain from "../Components/LayoutMain";

function Login() {
    const [formData, setFormData] = useState({
      first_name: "nombre",
      last_name: "",
        email: "",
        password: "",
    });
    const [savedData, setSavedData] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData);
  
      try {
          const response = await login(formData); 
          
          if (response.success) {
              console.log("Inicio de sesión exitoso!");
          
          } else {
              console.error("Error en el inicio de sesión:", response.message);
          }
      } catch (error) {
          console.error("Error en el inicio de sesión:", error.message);
      }
  };

    return (
        <LayoutMain>
            <div>
                <Link to="/Header"></Link>
                <main className="grow flex justify-center bg-blue-500">
                    <div className="border border-black w-10/12 bg-white rounded-lg">
                    
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
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </main>
                <footer className="bg-blue-500 text-white text-center py-4">
                    Alejandra Hidalgo-My Tinerary
                </footer>
            </div>
            {savedData && (
                <div className="p-8">
                    <h2>Datos guardados:</h2>
                    <h2>Datos guardados:</h2>
                                <p>First Name: {savedData.first_name}</p>
                                <p>Last Name: {savedData.last_name}</p>
                                <p>Email: {savedData.email}</p>
                                <p>Password: {savedData.password}</p>
                                <p>Country: {savedData.country}</p>
                                <p>Image URL: {savedData.image}</p>
                </div>
            )}
        </LayoutMain>
    );
}

export default Login;