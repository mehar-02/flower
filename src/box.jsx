import React from "react";

import './box.css';

function Box({num,onbox}) {
    const handleBoxClick1 = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scrolling animation
        });
        onbox(num);
    }
    return (
            <button className="btns page-num" onClick={handleBoxClick1}>{num}</button>
    );
}

export default Box;