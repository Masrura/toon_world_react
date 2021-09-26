import React from 'react';
import './CartDetails.css'
const CartDetails = (props) => {
    //destructuring
    const { name, img, sponsorCost } = props.name;
    return (
        <div className="cart-detail-container">
            <div className="cartDetails">
                <img src={img} alt="" />
                <p>{name}</p>
                <p><i className="fas fa-dollar-sign icon-nested fa-lg"> </i>{sponsorCost}</p>
            </div>
        </div>
       
    );
};

export default CartDetails;