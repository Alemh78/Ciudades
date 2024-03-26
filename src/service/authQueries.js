
import axios from "axios";

const register=async (data)=>{
try{
    const response=await axios.post(`http://localhost4000/api/auth/register`,data)
    return response.data
}catch(error){
    return error.response.data
}
}
export const login = async (data) =>{
    try {
        const response = await axios.post(`http://localhost:4000/api/auth/login`, data);
        localStorage.setItem("token",response.data.data.token)
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

const loginWhithToken=async (data)=>{
    try{
        const token=localStorage.getItem(`token`)
        const response=await axios.post(`http://localhost:4000/api//auth/token`,{},{
            headers:{Authorization:`bearer ${token}`}
        })
        return response.data
    }catch(error){
        return error.response.data
    }
    }



export default {register,login,loginWhithToken};