import React from "react";

import './card.css';

function Card(props) {
    return(
    <div className="card">
        <div className="img-container">
            <img src={props.img} alt="cap" />
        </div>
        <div className="details">
            {props.name}
        </div>
    </div>
    );
}

export default Card;