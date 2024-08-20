const Reservation = require('../models/Reservation');

exports.createReservation = async (req, res) => {
  const { user, reservationDate, numberOfPeople, specialRequests } = req.body;
  try {
    const newReservation = new Reservation({
      user,
      reservationDate,
      numberOfPeople,
