import React from 'react';
import './Referrals.css';

const Referrals = ({ user }) => {
    // Mock data for demonstration
    const referralData = {
        referralCode: 'USER123',
        totalReferrals: 15,
        activeReferrals: 10,
        referralHistory: [
            { id: 1, name: 'John Doe', date: '2023-01-15', status: 'active', commission: 100.00 },
            { id: 2, name: 'Jane Smith', date: '2023-01-20', status: 'active', commission: 100.00 },
            { id: 3, name: 'Mike Johnson', date: '2023-02-01', status: 'inactive', commission: 0.00 }
        ]
    };

    return (
        <div className="referrals">
            <h2>Referrals</h2>
            <div className="referral-code">
                <h3>Your Referral Code</h3>
                <div className="code-box">
                    <p>{referralData.referralCode}</p>
                    <button>Copy</button>
                </div>
            </div>

            <div className="referral-stats">
                <div className="stat-card">
                    <h3>Total Referrals</h3>
                    <p className="highlight">{referralData.totalReferrals}</p>
                </div>
                <div className="stat-card">
                    <h3>Active Referrals</h3>
                    <p className="highlight">{referralData.activeReferrals}</p>
                </div>
            </div>

            <div className="referral-history">
                <h3>Referral History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Commission</th>
                        </tr>
                    </thead>
                    <tbody>
                        {referralData.referralHistory.map(referral => (
                            <tr key={referral.id}>
                                <td>{referral.name}</td>
                                <td>{referral.date}</td>
                                <td className={referral.status}>{referral.status}</td>
                                <td>${referral.commission.toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Referrals; 