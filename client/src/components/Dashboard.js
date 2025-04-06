import React from 'react';
import './Dashboard.css';

const Dashboard = ({ onLogout }) => {
  const mockData = {
    username: 'John Doe',
    referralCode: 'ABC123',
    earnings: 1250.50,
    referrals: [
      { id: 1, name: 'Alice Smith', date: '2024-03-01', earnings: 100 },
      { id: 2, name: 'Bob Johnson', date: '2024-03-02', earnings: 150 },
      { id: 3, name: 'Carol White', date: '2024-03-03', earnings: 200 }
    ]
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome, {mockData.username}!</h1>
        <button onClick={onLogout} className="logout-btn">Logout</button>
      </header>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Your Referral Code</h3>
          <p className="highlight">{mockData.referralCode}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Earnings</h3>
          <p className="highlight">${mockData.earnings.toFixed(2)}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Referrals</h3>
          <p className="highlight">{mockData.referrals.length}</p>
        </div>
      </div>

      <div className="dashboard-table-container">
        <h2>Recent Referrals</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Earnings</th>
            </tr>
          </thead>
          <tbody>
            {mockData.referrals.map(referral => (
              <tr key={referral.id}>
                <td>{referral.name}</td>
                <td>{new Date(referral.date).toLocaleDateString()}</td>
                <td>${referral.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard; 