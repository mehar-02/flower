import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

function NavBar({cartCount, heartCount}) {
    return (
        <nav>
            <div className="title">
                CAP-BEAST
            </div>
            <div className="nav-bar">
               <div className="heart" style={{marginRight:"20px"}}>
                <FontAwesomeIcon icon={faHeart} size="2x" />
                {heartCount > 0 && <span className="heart-count">{heartCount}</span>}
               </div>
               <div className="add-to-cart" style={{marginLeft:"auto"}}>
                <FontAwesomeIcon icon={faCartShopping} size="2x" />
                {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
               </div>
            </div>
        </nav>
    );
}

export default NavBar;