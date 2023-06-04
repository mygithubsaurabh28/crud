import { createSlice } from "@reduxjs/toolkit";


const userslice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        adduser(state,action){
        console.log(action.payload);
        state=state.push(action.payload)
        console.log(state)
        }
    }
})


export default userslice.reducer;
export const {adduser}=userslice.actions;