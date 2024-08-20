const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'OrderItem', required: true }],
  totalAmount: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
