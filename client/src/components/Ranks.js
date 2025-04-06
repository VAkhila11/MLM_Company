import React from 'react';
import './Ranks.css';

const Ranks = ({ user }) => {
    // Mock data for demonstration
    const rankData = {
        currentRank: 'Silver',
        nextRank: 'Gold',
        progress: 75,
        requirements: {
            directReferrals: 5,
            teamSize: 20,
            monthlyVolume: 5000
        },
        benefits: {
            commissionRate: 15,
            bonusAmount: 1000
        },
        rankHistory: [
            { rank: 'Bronze', achievedAt: '2023-01-01', status: 'completed' },
            { rank: 'Silver', achievedAt: '2023-02-15', status: 'current' },
            { rank: 'Gold', achievedAt: null, status: 'pending' }
        ]
    };

    return (
        <div className="ranks">
            <h2>Ranks & Achievements</h2>
            
            <div className="current-rank">
                <h3>Current Rank</h3>
                <div className="rank-card">
                    <h4>{rankData.currentRank}</h4>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: `${rankData.progress}%` }}></div>
                    </div>
                    <p>Progress to {rankData.nextRank}: {rankData.progress}%</p>
                </div>
            </div>

            <div className="requirements">
                <h3>Requirements for Next Rank</h3>
                <div className="requirements-list">
                    <div className="requirement">
                        <span>Direct Referrals:</span>
                        <span>{rankData.requirements.directReferrals}</span>
                    </div>
                    <div className="requirement">
                        <span>Team Size:</span>
                        <span>{rankData.requirements.teamSize}</span>
                    </div>
                    <div className="requirement">
                        <span>Monthly Volume:</span>
                        <span>${rankData.requirements.monthlyVolume}</span>
                    </div>
                </div>
            </div>

            <div className="benefits">
                <h3>Current Rank Benefits</h3>
                <div className="benefits-list">
                    <div className="benefit">
                        <span>Commission Rate:</span>
                        <span>{rankData.benefits.commissionRate}%</span>
                    </div>
                    <div className="benefit">
                        <span>Rank Bonus:</span>
                        <span>${rankData.benefits.bonusAmount}</span>
                    </div>
                </div>
            </div>

            <div className="rank-history">
                <h3>Rank History</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Achieved At</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rankData.rankHistory.map((rank, index) => (
                            <tr key={index} className={rank.status}>
                                <td>{rank.rank}</td>
                                <td>{rank.achievedAt || 'Not Achieved'}</td>
                                <td>{rank.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Ranks; 