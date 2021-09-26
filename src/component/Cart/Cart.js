import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart);
    let total = 0;
    for (const cart of props.cart) {
        total = total + cart.sponsorCost;
    }
    console.log("Total =", total);
    return (
        <div className="cart sticky-top">
            <p>Total Items Added: {props.cart.length}</p>
            <p> Total Cost: { total}</p>
            {
                props.cart.map((c) => <CartDetails key={ c.id} name={c}></CartDetails>)
            }
         
        </div>
    );
};

export default Cart;