import { configureStore } from '@reduxjs/toolkit';
import CiudadesReducer from './reducers/CitiesReducers';

const store={
    Ciudades:CiudadesReducer
}



export default configureStore({
    reducer:store
})