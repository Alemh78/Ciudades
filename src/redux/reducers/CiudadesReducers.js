import { createReducer } from "@reduxjs/toolkit";
import  fetchCiudades  from "../actions/citiesActions";


const initialState = {
  todas: []
};

const ciudadesReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchCiudades, (state, action) => {
    state.todas = action.payload; 
  });
});

export default ciudadesReducer;