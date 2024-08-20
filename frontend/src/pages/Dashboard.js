import React from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import Layout from '../components/Layout';

function Dashboard() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Total Orders</Typography>
            <Typography variant="h4">120</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Today's Revenue</Typography>
            <Typography variant="h4">$1,500</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Active Reservations</Typography>
            <Typography variant="h4">15</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Low Stock Items</Typography>
            <Typography variant="h4">5</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Dashboard;