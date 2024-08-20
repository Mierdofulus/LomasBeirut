const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { user, items, totalAmount } = req.body;
  try {
    const newOrder = new Order({ user, items, totalAmount });
    await newOrder.save();
    res.json(newOrder);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate('user items');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

