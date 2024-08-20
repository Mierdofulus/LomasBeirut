import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Inventory from './pages/Inventory';
import Orders from './pages/Orders';
import Reservations from './pages/Reservations';
import Login from './pages/Login';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/inventory" component={Inventory} />
          <Route path="/orders" component={Orders} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/reports" component={Reports} />
          <Route path="/" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
