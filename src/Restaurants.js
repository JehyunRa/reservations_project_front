import RestaurantList from './components/RestaurantList';

export default function Restaurants() {

  return (  
    <div className="page_restaurants">
      <h1>Choose a restaurant to book a reservation</h1>
      <RestaurantList />
    </div>
  );
}