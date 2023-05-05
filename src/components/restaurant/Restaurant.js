import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json.data.cards[2].data.data.cards);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  return (
    <>
      <div className="restaurant">
        <div className="filter">
          <p>Filter</p>
          <i className="fa-solid fa-filter"></i>
        </div>
        {allRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.data?.id} {...restaurant} />
        ))}
      </div>
    </>
  );
};

export default Restaurant;
