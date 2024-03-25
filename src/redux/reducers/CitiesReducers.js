import { createReducer } from "@reduxjs/toolkit";
import agregarCiudades from "../actions/citiesActions";

const initialState = {
  Ciudades: []
};

const CiudadesReducer = createReducer(initialState, (builder) => {
  builder.addCase(agregarCiudades,(state,actions)=>{
    return {
      ...state,
      Ciudades:actions.payload
    }
  })
});


export default CiudadesReducer;