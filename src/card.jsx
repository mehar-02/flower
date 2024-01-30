import React from "react";

import './card.css';

function Card(props) {
    return(
    <div className="card">
        <div className="img-container">
            <a href="/">
            <img src= {props.img} sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 30vw" /*width="2000" height="2000.0"*/ alt="cap" />
            </a>
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
                    <small>Brown</small>
                    <h3 className="prod-price">$50</h3>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Card;