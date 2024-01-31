import React from "react";

import Card from "./card.jsx";

import './cardlist.css';

function CardList({plants, onAddToCart}) {
    // const handlePage = (pageNum) => {
    //     onPage(pageNum);
    // };
    
    return (
       <div className="home">
        <div className="card-container">
            <div className="card-wrapper">
            {plants.map((plant) => 
               <Card key={plant.plant_id} name={plant.plant_name} img={plant.img} /* color={plant.color_name} color_img={plant.color_image}*/ colors={plant.associated_colors} associatedColors={plant.associated_color_images} rating={plant.rating} price={plant.price} onAddToCart={onAddToCart} />
            )}
            </div>
        </div>
        </div>
    );
}

export default CardList;