import React, { useEffect, useState } from "react";
import axios from 'axios';
import CardList from "./cardList.jsx";
// import CardList1 from "./list1.jsx";
// import CardList2 from "./list2.jsx";
import Navigation from "./navigation.jsx";


function Main() {
    const [page, setPage] = useState(1); 
    // const [plants1, setPlants1] = useState([]);
    // const [plants2, setPlants2] = useState([]);

    const [plants, setPlants] = useState([]);

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
            <CardList plants={plants} />
            {/* {page === 1 && <CardList plants={plants} />}
            {page === 2 && <CardList plants={plants} />}
            {page === 3 && <CardList plants={plants} />} */}
            {/* <CardList plants={plants} onPage={handlePage} /> */}
            {/* <CardList1 plants={plants} onPage={fetchPlants1} />
            <CardList2 plants={plants} onPage={fetchPlants2} /> */}
        </div>
        <div className="nav">
            <Navigation onNum={handlePage} />  
        </div>
        </>
    );
}

export default Main;