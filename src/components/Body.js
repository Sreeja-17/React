import reslist from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";

import Shimmer from "./Shimmer";
const Body = () => {
    const styleCard = {
        backgroundColor: "#f0f0f0",
    };
    

    const [listOfRestaurants , setListOfRestaurant]= useState([]);
    console.log(listOfRestaurants)
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData=async() => {
        const data= await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.6819372&lng=79.98884129999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        setListOfRestaurant(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };

    if ( listOfRestaurants && listOfRestaurants.length === 0){
        return <Shimmer />;
    }


   
    return (
        <div className="body">
            <div className="filter">
            <button 
            className="filter-btn"
            onClick={() => {
                const filteredList = listOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList)
            }}
            >
                Top Rated Restaurants
            </button>

            </div>
            
            
            <div className="res-container">
                
                    {listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
                    ))}
                </div>
        </div>
    );
};
console.log("rendered");

export default Body;

