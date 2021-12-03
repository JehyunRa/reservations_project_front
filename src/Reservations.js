import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DateGuestSizeForm from './components/Date_guestsize_form';

export default function Reservations() {

  const id = parseInt(useParams().id);
  const restaurant = (useSelector((state) => state.restaurants.value))
                     .find(restaurant => restaurant.id === id);

  return (
    <div className="page_reservations">
      <h1>Book a reservation at the {restaurant.restaurant_name}.</h1>
      <DateGuestSizeForm />
    </div>
  );
}