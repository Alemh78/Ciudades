import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LayoutMain from "../Components/LayoutMain";
import authQueries from '../service/authQueries';

function Login() {
    const [formData, setFormData] = useState({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
       
    });
    const Navigate=useNavigate();
    function handleInputChange(e){
      const name=e.target.name
      const value=e.target.value
      const aux={...formData};
      aux[name]=value;
      setFormData(aux);

    }
function handleSubmit(e) {
      e.preventDefault();
      const aux={formData};
      for(const key in aux){
       if (!aux[key]) delete aux [key]; 
       authQueries.Login(aux).then((response)=>{console.log(response)
      if (response.status==201){alerts.console.log("Registro exitoso!");
    Navigate("/login");
  }else{
    setError(response.message || "Error al registrar.")
  
  }
      })
     
  };
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
            {formData && (
                <div className="p-8">
                    <h2>Datos guardados:</h2>
                    <h2>Datos guardados:</h2>
                                <p>First Name: {formData.first_name}</p>
                                <p>Last Name: {formData.last_name}</p>
                                <p>Email: {formData.email}</p>
                                <p>Country: {formData.country}</p>
                                <p>Image URL: {formData.image}</p>
                </div>
            )}
        </LayoutMain>
    );
}

export default Login;