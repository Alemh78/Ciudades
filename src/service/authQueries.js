
import axios from "axios";


const register=async (data)=>{
    try {
        const response = await axios.post(`http://localhost:4000/api/auth/register`, data);
        if (response && response.data) {
            return { success: true, data: response.data };
        } else {
            return { success: false, error: "No data received from server" };
        }
    } catch (error) {
        return { success: false, error: error.response.data };
    }
};
export const login = async (data) => {
    try {
        const response = await axios.post(`http://localhost:4000/api/auth/login`, data);
        localStorage.setItem("token",response.data.data.token)
        return { success: true, data: response.data };
    } catch (error) {
        return { success: false, error: error.response.data }; // Retornar un objeto con error y los datos de la respuesta del error
    }
    }

const loginWhithToken = async (data) => {
    try {
        const token = localStorage.getItem(`token`);
        const response = await axios.post(`http://localhost:4000/api/auth/token`, {}, {
            headers: { Authorization: `bearer ${token}` }
        });
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};


export default { register, login, loginWhithToken };