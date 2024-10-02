import RestoCard from "./RestoCard";
import resList from "../Utils/restoData";
import { useState } from "react";

const Body = () => {
    //Local State Variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.avgRating > 4.1
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestoCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
