const reportService = require('../services/reportService');

exports.getDailySalesReport = async (req, res) => {
  try {
    const { date } = req.query;
    const report = await reportService.generateDailySalesReport(new Date(date));
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: 'Error generating daily sales report', error: error.message });
  }
};