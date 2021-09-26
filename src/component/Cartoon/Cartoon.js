import React from 'react'
import './Cartoon.css'

const Cartoon = (props) => {
    const { name, movie, rank, year, sponsorCost, img } = props.cartoon;
  //  console.log(props);
    return (
        <div>
            <div className="card">
                <img src={img} className="card-img-top" alt="..."/>
                <div className ="card-body">
                    <h5 className ="card-title">{name}</h5>
                    <p className ="card-text">Movie: {movie}</p>
                    <p className ="card-text">Year: {year}</p>
                    <p className ="card-text">Rank: {rank}</p>
                    <p className ="card-text">Cost: {sponsorCost}</p>
                <button onClick={() => props.handleAddToCart(props.cartoon)}
                        className="btn-regular"><i className="fas fa-cart-arrow-down"></i>add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default Cartoon;