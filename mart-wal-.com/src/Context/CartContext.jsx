import React, {useState, useContext, createContext } from 'react';

const CartContext = React.createContext();

function AddItemsToCart(props) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    }

    const removeProduct = (id) => {
        setCart((cart) => {
            return cart.filter((product) => product.id !== id)
        })
    }

    return(
        <CartContext.Provider value= {{cart, addToCart, removeProduct }}>
            {props.children}
        </CartContext.Provider>
    );
}

export const useCartContext = () => {
    return useContext(CartContext);
}

export { AddItemsToCart, CartContext };