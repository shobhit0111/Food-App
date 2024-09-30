import RestoCard from "./RestoCard";
import resList from "../Utils/restoData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
            <RestoCard key={restaurant.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};
export default Body;
  