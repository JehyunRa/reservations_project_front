import RestaurantCard from './Restaurant_card';
import { useSelector } from 'react-redux';

export default function Restaurants() {

  const restaurants = useSelector((state) => state.restaurants.value);
  console.log("value: " + restaurants);

  console.log(restaurants);
  const restaurantCards = restaurants.map((restaurant, key) =>
    <RestaurantCard key={key} restaurant={restaurant} />
  );

  return (
    <div>{restaurantCards}</div>
  );
}