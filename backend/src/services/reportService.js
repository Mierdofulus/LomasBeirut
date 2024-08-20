const { Order, OrderItem, Inventory } = require('../models');
const { Op } = require('sequelize');

exports.generateDailySalesReport = async (date) => {
  const startOfDay = new Date(date);
  startOfDay.setHours(0, 0, 0, 0);
  
  const endOfDay = new Date(date);
  endOfDay.setHours(23, 59, 59, 999);

  try {
    const orders = await Order.findAll({
      where: {
        createdAt: {
          [Op.between]: [startOfDay, endOfDay]
        },
        status: 'completed'
      },
      include: [{ 
        model: OrderItem,
        include: [{ model: Inventory, as: 'item' }]
      }]
    });

    let totalSales = 0;
    let itemsSold = {};

    orders.forEach(order => {
      totalSales += parseFloat(order.totalAmount);
      order.OrderItems.forEach(item => {
        if (itemsSold[item.item.name]) {
          itemsSold[item.item.name].quantity += item.quantity;
          itemsSold[item.item.name].total += parseFloat(item.price) * item.quantity;
        } else {
          itemsSold[item.item.name] = {
            quantity: item.quantity,
            total: parseFloat(item.price) * item.quantity
          };
        }
      });
    });

    return {
      date: startOfDay,
      totalSales,
      numberOfOrders: orders.length,
      itemsSold
    };
  } catch (error) {
    throw new Error('Error generating daily sales report: ' + error.message);
  }
};