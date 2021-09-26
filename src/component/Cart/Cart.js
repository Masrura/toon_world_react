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
            <div className="top-info">
                <h5>Total Items Added: {props.cart.length}</h5>
                <h5> Total Cost:<i class="fas fa-dollar-sign icon fa-lg"> </i>{total}</h5>
            </div>

            {
                props.cart.map((c) => <CartDetails key={c.id} name={c}></CartDetails>)
            }
            <button className="btn-regular btn-primary"><i class="fas fa-shopping-bag icon-check-out"></i>Check Out</button>
        </div>


    );
};

export default Cart;