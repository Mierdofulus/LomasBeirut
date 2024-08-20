import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const getInventory = () => api.get('/inventory');
export const addItem = (item) => api.post('/inventory', item);
export const updateItem = (id, item) => api.put(`/inventory/${id}`, item);
export const deleteItem = (id) => api.delete(`/inventory/${id}`);
export const getOrders = () => api.get('/orders');
export const createOrder = (order) => api.post('/orders', order);
export const getReservations = () => api.get('/reservations');
export const createReservation = (reservation) => api.post('/reservations', reservation);
export const getReports = () => api.get('/reports');
