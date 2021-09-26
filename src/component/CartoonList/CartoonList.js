import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Cartoon from '../Cartoon/Cartoon';
import './CartoonList.css'
const CartoonList = () => {
    const [cartoonList, setCartoonList] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCartoonList(data));
    }, [])
    
    const handleAddToCart = (cartoon) => {
        // const newCart = [...cart, product];
        // setCart(newCart);
        // addToDb(product.key);
        const newCart = [...cart];
        const existing = cart.find(c => c.id === cartoon.id);
        if (!existing) {
            newCart.push(cartoon);
            setCart(newCart);
        }
        
       
        
    }
    return (
        <div className="row">
            <div className='cartoon-list col-md-8'>
                {
                    cartoonList.map(cartoon => <Cartoon
                        key={cartoon.id}
                        handleAddToCart={handleAddToCart}
                        cartoon={cartoon}></Cartoon>)
                }
            </div>
            <div className="col-md-3 cart-container">
                <Cart cart = {cart} ></Cart>
            </div>
        </div>
    );
};

export default CartoonList;