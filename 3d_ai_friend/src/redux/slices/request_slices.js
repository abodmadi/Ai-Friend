import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    currentRequest:null,
    error:null,
    isLoading:false,
};

const requestSlice = createSlice({
    name:'request',// name of the slice or the state
    initialState,// initial state function
    // reducer: contain state functions 
    reducers:{
        requestInStart:(state)=>{
            state.isLoading=true;
        },
        // action: to get the data based to the state 
        requestInSuccess:(state,action)=>{
            state.currentRequest=action.payload;
            state.isLoading=false;
            state.error=null;
        },
        requestInFailure:(state,action)=>{
            state.error=action.payload;
            state.isLoading=false;
        },
    },
});

export const {requestInStart,requestInSuccess,requestInFailure} = requestSlice.actions;
export default requestSlice.reducer;