import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const defaultCart ={cartItems:[]};
    const [cart, setCart] =useState(()=>{
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : defaultCart;
     });
     const updateCart = (newCart) =>{
        try{
            localStorage.setItem("cart",JSON.stringify(newCart));
            setCart(newCart);
        }catch(e){
            console.log(e);
        }
     }  

    return (
        <CartContext.Provider value={{cart,updateCart}}>
            {children}
        </CartContext.Provider>
    );
}


 CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};