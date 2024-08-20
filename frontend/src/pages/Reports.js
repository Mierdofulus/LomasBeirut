import React, { useState, useEffect } from 'react';
import { getReports } from '../services/api';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    const { data } = await getReports();
    setReports(data);
  };

  return (
    <div>
      <h2>Reports</h2>
      <ul>
        {reports.map((report, index) => (
          <li key={index}>
            Report {index + 1}: {report.details}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reports;
