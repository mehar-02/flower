import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardList from "./cardList.jsx";
// import CardList1 from "./list1.jsx";
// import CardList2 from "./list2.jsx";
import Navigation from "./navigation.jsx";
import NavBar from "./navbar.jsx";


function Main() {
    const [page, setPage] = useState(1); 
    // const [plants1, setPlants1] = useState([]);
    // const [plants2, setPlants2] = useState([]);

    const [plants, setPlants] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [heartCount, setHeartCount] = useState(0);

    const addToCart = () => {
        setCartCount(prevCount => prevCount +1);
    }
    
    const addToHeart = () => {
        setHeartCount(prev => prev +1);
    }
    useEffect(() => {
        fetchPlants(page);
    }, [page]);
    const fetchPlants = async (pageNum) => {
        try {
            let response;
            switch (pageNum) {
                case 1:
                    response = await axios.get('https://flower-rust.vercel.app/api/data/plants');
                    break;
                case 2:
                    response = await axios.get('https://flower-rust.vercel.app/api/data/plants1');
                    break;
                case 3:
                    response = await axios.get('https://flower-rust.vercel.app/api/data/plants2');
                    break;
                default:
                    response = await axios.get('https://flower-rust.vercel.app//api/data/plants');
            }
            setPlants(response.data);
            setPage(pageNum);
        } catch (error) {
            console.error('Error fetching plants: ', error);
        }
    };
    
    const handlePage = (pageNum) => {
        setPage(pageNum);
    }

    console.log("Plants ", plants);
    return (
        <>
        <div className="main-page">
            <NavBar cartCount={cartCount} heartCount={heartCount} />
            <CardList plants={plants} onAddToCart={addToCart} onHeart={addToHeart} />
            {/* {page === 1 && <CardList plants={plants} />}
            {page === 2 && <CardList plants={plants} />}
            {page === 3 && <CardList plants={plants} />} */}
            {/* <CardList plants={plants} onPage={handlePage} /> */}
            {/* <CardList1 plants={plants} onPage={fetchPlants1} />
            <CardList2 plants={plants} onPage={fetchPlants2} /> */}
        </div>
        <div className="nav">
            <Navigation onNum={handlePage} currentPage={page} />  
        </div>
        </>
    );
}

export default Main;