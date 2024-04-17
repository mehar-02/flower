import {React, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
// import {faHeart as faHeartSolid} from '@fortawesome/free-solid-svg-icons'
import StarRating from "./rating";

import './card.css';

function Card(props) {
    // const colorImages = props.associatedColors.split(',');
    const [ind, setInd] = useState(0);
    // const [filled, setFilled] = useState(false);
    const colorImages = props.colors.split(',');  //red green
    const colorUrls = props.associatedColors.split(','); //urls
    const handleColorButtonClick = (index) => {
        setInd(index);
    }
    const handleAddToCart = () => {
        props.onAddToCart();
    }
    const handleHeart = () => {
        props.onHeart();
        // setFilled=true;
    }

    return(
    <div className="card">
        <div className="img-container">
            <a href="#">
                <img src= {colorUrls[ind]} sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw" /*width="2000" height="2000.0"*/ alt="cap" />
            </a>
            <div className="heart-icon" onClick={handleHeart}>
                <FontAwesomeIcon icon={faHeart} size="2x" />
            </div>
            <div className="cart-icon" onClick={handleAddToCart}>
                {/* <FontAwesomeIcon icon={faCartPlus} size="2x" /> */}
                <FontAwesomeIcon icon={faShoppingBag} size="2x" />
            </div>
         
        </div>
        <div className="details">
            {/* {props.name} */}
            <div className="prod-name">
                <h4>
                    <a href="/">
                        {props.name}
                        {/* Rash, Zits, and Pimple */}
                    </a>
                </h4>

                <div className="specs">
                    <h3 className="prod-price">${props.price}</h3>
                    <div className="color-circle">
                        {colorImages.map((colorImg, index) => (
                            // <a key={index} href="#" target="_blank" rel="noopener noreferrer">
                                <button className= {`btn circle ${ind === index ? 'selected' : ''}`} style = {{backgroundColor: colorImg}} onClick = {() => handleColorButtonClick(index)}  ></button>
                            /* </a> */
                        ))}
                        {/* <a href="/">
                        <button className="btn circle"></button><img src={props.color_img} alt="color" />
                        </a> */}
                    </div>
                    <StarRating rating={props.rating} />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;