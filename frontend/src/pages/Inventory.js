import React, { useState, useEffect } from 'react';
import { getInventory, addItem, updateItem, deleteItem } from '../services/api';
import InventoryForm from '../components/InventoryForm';

function Inventory() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    const { data } = await getInventory();
    setItems(data);
  };

  const handleAddItem = async (item) => {
    await addItem(item);
    fetchInventory();
  };

  const handleUpdateItem = async (id, item) => {
    await updateItem(id, item);
    fetchInventory();
    setEditingItem(null);
  };

  const handleDeleteItem = async (id) => {
    await deleteItem(id);
    fetchInventory();
  };

  return (
    <div>
      <h2>Inventory</h2>
      <InventoryForm onSubmit={editingItem ? (item) => handleUpdateItem(editingItem._id, item) : handleAddItem} item={editingItem} />
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            {item.itemName} - {item.quantity} - {item.price}
            <button onClick={() => setEditingItem(item)}>Edit</button>
            <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;
