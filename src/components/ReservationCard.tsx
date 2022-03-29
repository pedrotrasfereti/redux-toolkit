import { useDispatch } from 'react-redux';
import { removeReservation } from '../app/features/reservationSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
}

function ReservationCard({ name, index }: ReservationCardTypes) {
  const dispatch = useDispatch();

  const handleRemoveReservation = (index: number) => {
    dispatch(removeReservation(index));
  };

  return (
    <div
      key={ index }
      className='reservation-card-container'
      onClick={ () => handleRemoveReservation(index) }
    >
      { name }
    </div>
  )
};

export default ReservationCard;
