import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice(
    {
    name :'carts',
    initialState : {
        items:[],
    },
    reducers: {      
        addItems : (state,action) =>{
            //Redux uses Immer js behind the scenes
            //Mutating(Modifying) state here
            state.items.push(action.payload)
        },
        removeItem : (state) =>{          //if u need action,take action as well for argument.
            state.items.pop();
        },
        clearCart : (state) =>{

            state.items.length = 0  //state = []
        }
    }
});

export const {addItems , removeItem , clearCart} = CardSlice.actions;
export default CardSlice.reducer