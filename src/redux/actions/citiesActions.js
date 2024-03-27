import { createAction } from '@reduxjs/toolkit';



const fetchCiudades = createAction('fetchCiudades');

export const loadCiudades = () => async (dispatch) => {
  try {
    const ciudades = await getCities(); 
    dispatch(fetchCiudades(ciudades)); 
  } catch (error) {
    console.error("Error al cargar las ciudades:", error);
  }
};  

export default fetchCiudades