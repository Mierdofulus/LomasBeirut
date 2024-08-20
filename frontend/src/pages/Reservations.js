import React, { useState, useEffect } from 'react';
import { getReservations } from '../services/api';

function Reservations() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetchReservations();
  }, []);

  const fetchReservations = async () => {
    const { data } = await getReservations();
    setReservations(data);
  };

  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation._id}>
            Reservation by {reservation.user.username} - {new Date(reservation.reservationDate).toLocaleString()} - {reservation.numberOfPeople} people
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reservations;
