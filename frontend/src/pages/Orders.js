import React, { useState, useEffect } from 'react';
import { getOrders } from '../services/api';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const { data } = await getOrders();
    setOrders(data);
  };

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order by {order.user.username} - {order.totalAmount} - {new Date(order.orderDate).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
