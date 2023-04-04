import { imagePrefix } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
    <div className="restaurant-card">
      <img className="card-img" src={imagePrefix + cloudinaryImageId} alt="" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{costForTwo}</h4>
      <h5>{avgRating}</h5>
      <h5>{deliveryTime}</h5>
    </div>
  );
};

export default RestaurantCard;
