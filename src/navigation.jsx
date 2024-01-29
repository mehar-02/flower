import React from "react";

import Box from "./box.jsx";
import './navigation.css';

function Navigation({onNum}) {
    const handleBoxClick = (num) => {
        onNum(num);
    };
    return (
        <div className="navigation-pages">
            <Box num="1" onbox={() => handleBoxClick(1)} />
            <Box num="2" onbox={() => handleBoxClick(2)} />
            <Box num="3" onbox={() => handleBoxClick(3)} />
        </div>
    );
}

export default Navigation;