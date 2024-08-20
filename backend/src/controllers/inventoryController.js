const Inventory = require('../models/Inventory');

exports.getInventory = async (req, res) => {
  try {
    const items = await Inventory.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.addItem = async (req, res) => {
  const { itemName, quantity, price } = req.body;
  try {
    const newItem = new Inventory({ itemName, quantity, price });
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateItem = async (req, res) => {
  const { itemName, quantity, price } = req.body;
  try {
    let item = await Inventory.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    item.itemName = itemName;
    item.quantity = quantity;
    item.price = price;

    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Inventory.findById(req.params.id);
    if (!item) return res.status(404).json({ msg: 'Item not found' });

    await item.remove();
    res.json({ msg: 'Item removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
