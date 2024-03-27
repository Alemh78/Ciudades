import { configureStore } from '@reduxjs/toolkit';
import ciudadesReducer from './reducers/CiudadesReducers'; 

export default configureStore({
    reducer: {
        ciudades: ciudadesReducer 
    }
});