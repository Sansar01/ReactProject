import { createSelector, createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addIem : (state,action)=>{
           state.push(action.payload)
        },
    }
});

export const getItemsSelector = createSelector(
    (state)=>state.cart,
    (state)=>state
    );

export const {addIem} = cartSlice.actions;

export default cartSlice.reducer;