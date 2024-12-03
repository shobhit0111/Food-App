import { CDN_URL } from "../Utils/constants";
import { Link } from "react-router-dom";

const RestoCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <Link to={`/restaurant/${resData.info?.id}`} className="card-link">
        <img
          className="food-img"
          alt="food"
          src={CDN_URL + resData.info?.cloudinaryImageId}
        />
        <h3>{resData?.info?.name}</h3>
        <h4>{resData?.info?.cuisines?.join(", ")}</h4>
        <h4>{resData?.info?.avgRating} ⭐</h4>
        <h4>{resData?.info?.costForTwo}</h4>
        <h4>{resData?.info?.sla?.deliveryTime} mins</h4>
      </Link>
    </div>
  );
};
export default RestoCard;
