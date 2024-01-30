import React from "react";

import Card from "./card.jsx";
import Navigation from "./navigation.jsx";

import './cardlist.css';

function CardList({plants}) {
    // const handlePage = (pageNum) => {
    //     onPage(pageNum);
    // };
    return (
       <div className="home">
        <div className="card-container">
            <div className="card-wrapper">
            {plants.map((plant) => 
               <Card key={plant.plant_id} name={plant.plant_name} img={plant.img} color={plant.color} />
            )}
            </div>
        </div>
        </div>
    );
}

export default CardList;