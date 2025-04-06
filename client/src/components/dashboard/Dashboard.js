import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  Button
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [referralTree, setReferralTree] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem('token');
        const [dashboardRes, treeRes] = await Promise.all([
          axios.get('http://localhost:5000/api/dashboard', {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get('http://localhost:5000/api/referral-tree', {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);
        setDashboardData(dashboardRes.data.user);
        setReferralTree(treeRes.data);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred');
      }
    };

    fetchDashboardData();
  }, []);

  if (!dashboardData) return <div>Loading...</div>;

  const referralData = [
    { name: 'Direct Referrals', value: dashboardData.directReferrals.length },
    { name: 'Total Referrals', value: dashboardData.totalReferrals }
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Welcome Card */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>
              Welcome, {dashboardData.username}!
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Your Referral Code: {dashboardData.referralCode}
            </Typography>
          </Paper>
        </Grid>

        {/* Stats Cards */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Level
              </Typography>
              <Typography variant="h4">
                {dashboardData.level}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Earnings
              </Typography>
              <Typography variant="h4">
                ${dashboardData.earnings.toFixed(2)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary" gutterBottom>
                Total Referrals
              </Typography>
              <Typography variant="h4">
                {dashboardData.totalReferrals}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Referral Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 300 }}>
            <Typography variant="h6" gutterBottom>
              Referral Statistics
            </Typography>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={referralData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Direct Referrals List */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" gutterBottom>
              Direct Referrals
            </Typography>
            {dashboardData.directReferrals.length > 0 ? (
              dashboardData.directReferrals.map((referral) => (
                <Box key={referral._id} sx={{ mb: 2, p: 2, border: '1px solid #ddd', borderRadius: 1 }}>
                  <Typography variant="subtitle1">{referral.username}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Joined: {new Date(referral.createdAt).toLocaleDateString()}
                  </Typography>
                </Box>
              ))
            ) : (
              <Typography>No direct referrals yet</Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 