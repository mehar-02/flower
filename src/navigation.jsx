import React from "react";

import Box from "./box.jsx";
import './navigation.css';

function Navigation({onNum, currentPage }) {
    const handleBoxClick = (num) => {
        onNum(num);
    };
    const handleNextClick = () => {
        onNum(currentPage+1);
    };
    const handlePrevClick = () => {
        onNum(currentPage-1);
    };
    return (
        <div className="navigation-pages">
            {currentPage!==1 && <Box num="Prev" onbox={handlePrevClick} />}
            <Box num="1" onbox={() => handleBoxClick(1)} />
            <Box num="2" onbox={() => handleBoxClick(2)} />
            <Box num="3" onbox={() => handleBoxClick(3)} />
            {currentPage!==3 && <Box num="Next" onbox={handleNextClick} />}
        </div>
    );
}

export default Navigation;