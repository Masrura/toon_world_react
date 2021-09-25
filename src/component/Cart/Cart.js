import React from 'react';
import CartDetails from '../CartDetails/CartDetails';

const Cart = (props) => {
    console.log(props.cart);
    return (
        <div>
            {
                props.cart.map((c) => <CartDetails name={ c.name}></CartDetails>)
            }
        </div>
    );
};

export default Cart;