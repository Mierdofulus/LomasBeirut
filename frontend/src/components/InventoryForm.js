import React, { useState, useEffect } from 'react';

function InventoryForm({ onSubmit, item }) {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (item) {
      setItemName(item.itemName);
      setQuantity(item.quantity);
      setPrice(item.price);
    } else {
      setItemName('');
      setQuantity('');
      setPrice('');
    }
  }, [item]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ itemName, quantity, price });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
}

export default InventoryForm;
