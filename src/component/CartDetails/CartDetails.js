import React from 'react';
import './CartDetails.css'
const CartDetails = (props) => {
    const { name, img, sponsorCost } = props.name;
    return (
        <div className="cart-detail-container">
            <div className="cartDetails">
                <img src={img} alt="" />
                <p>{name}</p>
                <p><i class="fas fa-dollar-sign icon fa-lg"> </i>{sponsorCost}</p>
            </div>
        </div>
       
    );
};

export default CartDetails;