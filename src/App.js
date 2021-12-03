import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Home from './Home';
import Restaurants from './Restaurants';
import Reservations from './Reservations';
import ReservationsConfirm from './Reservations_confirm';

import './styles/App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/restaurants/:id/reservations/new" element={<Reservations />} />
            <Route path="/restaurants/:id/reservations/confirm_page=true" element={<ReservationsConfirm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
