import React from 'react';
import './Packages.css';

const Packages = ({ user }) => {
    // Mock data for demonstration
    const packages = [
        {
            id: 1,
            name: 'Starter',
            price: 100,
            features: [
                'Basic commission rate',
                'Up to 5 direct referrals',
                'Basic support',
                'Monthly bonus eligibility'
            ],
            commissionRate: 10
        },
        {
            id: 2,
            name: 'Professional',
            price: 500,
            features: [
                'Higher commission rate',
                'Unlimited direct referrals',
                'Priority support',
                'Weekly bonus eligibility',
                'Team commission'
            ],
            commissionRate: 15
        },
        {
            id: 3,
            name: 'Enterprise',
            price: 1000,
            features: [
                'Highest commission rate',
                'Unlimited direct referrals',
                '24/7 priority support',
                'Daily bonus eligibility',
                'Team commission',
                'Rank acceleration'
            ],
            commissionRate: 20
        }
    ];

    return (
        <div className="packages">
            <h2>Membership Packages</h2>
            <div className="package-grid">
                {packages.map(pkg => (
                    <div key={pkg.id} className="package-card">
                        <h3>{pkg.name}</h3>
                        <div className="price">
                            <span className="amount">${pkg.price}</span>
                            <span className="period">/one-time</span>
                        </div>
                        <div className="commission-rate">
                            Commission Rate: {pkg.commissionRate}%
                        </div>
                        <ul className="features">
                            {pkg.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                        <button className="select-btn">
                            {user?.currentPackage === pkg.id ? 'Current Package' : 'Select Package'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages; 