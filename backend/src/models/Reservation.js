const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reservationDate: { type: Date, required: true },
  numberOfPeople: { type: Number, required: true },
  specialRequests: { type: String },
});

module.exports = mongoose.model('Reservation', ReservationSchema);
