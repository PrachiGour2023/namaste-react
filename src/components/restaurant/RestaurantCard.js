const RestaurantCard = (props) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    deliveryTime,
    avgRating,
    aggregatedDiscountInfo,
  } = props.data;

  return (
    <>
      <div className="restaurant-card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt=""
          className="card-image"
        />
        <div className="restaurant-description">
          <b>{name}</b>
          <p>{cuisines.join(", ")}</p>
          <div className="display-items">
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <b>{avgRating}</b>
            </div>
            <div className="time">{deliveryTime} MINS</div>
            <div className="cost">{costForTwo / 100} FOR TWO</div>
          </div>
        </div>
        <hr />
        <div className="discount">
          <i className="fa-solid fa-percent"></i>
          <p>{aggregatedDiscountInfo?.descriptionList[0]?.meta.split("on orders above ₹249")}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
