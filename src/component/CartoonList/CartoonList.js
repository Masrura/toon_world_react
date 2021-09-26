import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Cartoon from '../Cartoon/Cartoon';
import './CartoonList.css'
const CartoonList = () => {
    //State
    const [cartoonList, setCartoonList] = useState([]);
    const [cart, setCart] = useState([]);
    //Data Fetch from fake data file
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setCartoonList(data));
    }, [])

    // Add Button onClick Function
    const handleAddToCart = (cartoon) => {
        const newCart = [...cart];
        const existing = cart.find(c => c.id === cartoon.id);
        if (!existing) {
            newCart.push(cartoon);
            setCart(newCart);
        }
        else {
            alert("Already Selected");
        }      
    }
    return (
        <div className="row">
            <div className='cartoon-list col-md-8'>
                {
                    // Calling Cartoon Component to render each cartoon
                    cartoonList.map(cartoon => <Cartoon
                        key={cartoon.id}
                        handleAddToCart={handleAddToCart}
                        cartoon={cartoon}></Cartoon>)
                }
            </div>
            {/* Cart Component */}
            <div className="col-md-3 cart-container">
                <Cart cart = {cart} ></Cart>
            </div>
        </div>
    );
};

export default CartoonList;