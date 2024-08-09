import { createSlice } from "@reduxjs/toolkit";


const weatherSlice = createSlice({
name:"weatherDetail",
initialState:{
    apiData:null,
    Lat:"",
    Long:"",
    Search:"",
},
reducers:{
    setApiData:(state,action)=>{
        state.apiData=action.payload;
    },
    setLat:(state,action)=>{
        state.Lat=action.payload;
    },
    setLong:(state,action)=>{
        state.Long=action.payload;
    },
    setSearch:(state,action)=>{
        state.Search=action.payload;
    },
   
},

});
export const{setApiData,setLat,setLong,setSearch}=weatherSlice.actions;
export default weatherSlice.reducer;