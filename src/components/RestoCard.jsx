import { CDN_URL } from "../Utils/constants";

const RestoCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img
          className="food-img"
          alt="food"
          src={resData?.cloudinaryImageId ? CDN_URL+resData.cloudinaryImageId: "fallback-image-url.jpg"}
        />
        <h3>{resData?.name || "Unknown restaurants"}</h3>
        <h4>{resData?.cuisines?.join(", ") || "N/A"}</h4>
        <h4>{resData?.avgRating ? `${resData.avgRating}⭐` : "No Rating"}</h4>
        <h4>{resData?.costForTwo || "Cost info not available"}</h4>
        <h4>{resData?.sla?.deliveryTime ? `${resData.sla.deliveryTime} mins` : "Delivery time not available"}</h4>
      </div>
    );
};
export default RestoCard;
  