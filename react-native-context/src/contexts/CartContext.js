import { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state,action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [...state,{id: Date.now().toString(), name: 'New Item'}];
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.payload);
        default :
            return state;
    }
}

const CartProvider = ({children}) => {

    const [cart, dispatch] = useReducer(cartReducer, []);

    //{id: Date.now().toString(), name: 'New Item'}

    return(
        <CartContext.Provider value={{cart,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider};