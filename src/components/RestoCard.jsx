import { CDN_URL } from "../Utils/constants";

const RestoCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img
          className="food-img"
          alt="food"
          src={CDN_URL+resData.cloudinaryImageId}
        />
        <h3>{resData.name}</h3>
        <h4>{resData.cuisines.join(", ")}</h4>
        <h4>{resData.avgRating}⭐</h4>
        <h4>{resData.costForTwo}</h4>
        <h4>{resData.sla.deliveryTime} mins</h4>
      </div>
    );
};
export default RestoCard;
  