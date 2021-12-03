import "../styles/components.css";

export default function RestaurantCard(props) {

  const url = '/restaurants/' + props.restaurant.id + '/reservations/new';

  return (
    <div className="restaurantCard">
      <a href={url}>{props.restaurant.restaurant_name}</a>
    </div>
  );
}