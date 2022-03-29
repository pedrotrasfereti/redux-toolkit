import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';

import './App.css';
import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';

import { addReservation } from './app/features/reservationSlice';

function App() {
  const [reservationName, setReservationName] = useState('');

  const reservations = useSelector((state: RootState) => (
    state.reservations.value
  ));

  const customers = useSelector((state: RootState) => (
    state.customers.value
  ));

  const dispatch = useDispatch();

  const handleAddReservation = () => {
    if (reservationName !== '') {
      dispatch(addReservation(reservationName));

      setReservationName(''); // clear input
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {
                reservations.map((name: string, index) => (
                  ReservationCard({ name, index }))
                )
              }
            </div>
          </div>
          <div className="reservation-input-container">
            <input
              value={ reservationName }
              onChange={ (e) => setReservationName(e.target.value) }
            />
            <button
              onClick={ () => handleAddReservation() }
            >
              Add
            </button>
          </div>
        </div>
        <div className="customer-food-container">
          {
            customers.map((customer) => (
              <CustomerCard
                id={ customer.id }
                name={ customer.name }
                food={ customer.food }
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
