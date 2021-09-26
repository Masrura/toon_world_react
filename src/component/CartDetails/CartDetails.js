import React from 'react';
import './CartDetails.css'
const CartDetails = (props) => {
    const { name, img } = props.name;
    return (
        <div className="cart-detail-container">
            <div className="cartDetails">
                <img src={img} alt="" />
                <p>{name}</p>
            </div>
        </div>
       
    );
};

export default CartDetails;