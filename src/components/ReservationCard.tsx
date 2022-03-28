import React from 'react';

interface ReservationCardTypes {
  name: string;
  key: number;
}

function ReservationCard({ name, key }: ReservationCardTypes) {
  return (
    <div
      key={ key }
      className='reservation-card-container'
    >
      { name }
    </div>
  )
};

export default ReservationCard;
