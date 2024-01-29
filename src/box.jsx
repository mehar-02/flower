import React from "react";

import './box.css';

function Box({num,onbox}) {
    const handleBoxClick1 = () => {
        onbox(num);
    }
    return (
        // <div className="page">
            <button className="btns" onClick={handleBoxClick1}>{num}</button>
        // </div>
    );
}

export default Box;