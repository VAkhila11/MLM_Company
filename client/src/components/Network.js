import React from 'react';
import './Network.css';

const Network = ({ user }) => {
    // Mock data for demonstration
    const networkData = {
        directReferrals: 5,
        totalTeam: 25,
        leftTeam: 12,
        rightTeam: 13,
        recentReferrals: [
            { id: 1, name: 'John Doe', date: '2023-01-15', position: 'left' },
            { id: 2, name: 'Jane Smith', date: '2023-01-20', position: 'right' },
            { id: 3, name: 'Mike Johnson', date: '2023-02-01', position: 'left' }
        ]
    };

    return (
        <div className="network">
            <h2>Network Overview</h2>
            <div className="network-stats">
                <div className="stat-card">
                    <h3>Direct Referrals</h3>
                    <p className="highlight">{networkData.directReferrals}</p>
                </div>
                <div className="stat-card">
                    <h3>Total Team</h3>
                    <p className="highlight">{networkData.totalTeam}</p>
                </div>
                <div className="stat-card">
                    <h3>Left Team</h3>
                    <p className="highlight">{networkData.leftTeam}</p>
                </div>
                <div className="stat-card">
                    <h3>Right Team</h3>
                    <p className="highlight">{networkData.rightTeam}</p>
                </div>
            </div>

            <div className="recent-referrals">
                <h3>Recent Referrals</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {networkData.recentReferrals.map(referral => (
                            <tr key={referral.id}>
                                <td>{referral.name}</td>
                                <td>{referral.date}</td>
                                <td>{referral.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Network; 