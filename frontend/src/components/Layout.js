import React from 'react';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Login</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/reports">Reports</Link></li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;
