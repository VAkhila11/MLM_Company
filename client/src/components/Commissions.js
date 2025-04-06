import React from 'react';
import './Commissions.css';

const Commissions = ({ user }) => {
    // Mock data for demonstration
    const commissionData = {
        totalEarnings: 2500.00,
        thisMonth: 500.00,
        lastMonth: 800.00,
        commissionHistory: [
            { id: 1, type: 'direct', amount: 300.00, date: '2023-01-15', status: 'paid', description: 'Direct referral commission' },
            { id: 2, type: 'team', amount: 200.00, date: '2023-01-20', status: 'pending', description: 'Team commission' },
            { id: 3, type: 'rank', amount: 500.00, date: '2023-02-01', status: 'paid', description: 'Rank bonus' }
        ]
    };

    return (
        <div className="commissions">
            <h2>Commissions</h2>
            <div className="commission-stats">
                <div className="stat-card">
                    <h3>Total Earnings</h3>
                    <p className="highlight">${commissionData.totalEarnings.toFixed(2)}</p>
                </div>
                <div className="stat-card">
                    <h3>This Month</h3>
                    <p className="highlight">${commissionData.thisMonth.toFixed(2)}</p>
                </div>
                <div className="stat-card">
                    <h3>Last Month</h3>
                    <p className="highlight">${commissionData.lastMonth.toFixed(2)}</p>
                </div>
            </div>

            <div className="commission-history">
                <h3>Commission History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commissionData.commissionHistory.map(commission => (
                            <tr key={commission.id}>
                                <td>{commission.date}</td>
                                <td className={commission.type}>{commission.type}</td>
                                <td>${commission.amount.toFixed(2)}</td>
                                <td className={commission.status}>{commission.status}</td>
                                <td>{commission.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Commissions; 