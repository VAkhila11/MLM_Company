import React from 'react';
import './Transactions.css';

const Transactions = ({ user }) => {
    // Mock data for demonstration
    const transactions = [
        { id: 1, type: 'commission', amount: 500.00, date: '2023-01-15', status: 'completed', description: 'Direct referral commission' },
        { id: 2, type: 'withdrawal', amount: 200.00, date: '2023-01-20', status: 'pending', description: 'Withdrawal request' },
        { id: 3, type: 'bonus', amount: 300.00, date: '2023-02-01', status: 'completed', description: 'Rank achievement bonus' },
        { id: 4, type: 'commission', amount: 150.00, date: '2023-02-05', status: 'completed', description: 'Team commission' }
    ];

    return (
        <div className="transactions">
            <h2>Transaction History</h2>
            <div className="filters">
                <select>
                    <option value="all">All Types</option>
                    <option value="commission">Commission</option>
                    <option value="withdrawal">Withdrawal</option>
                    <option value="bonus">Bonus</option>
                </select>
                <select>
                    <option value="all">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                </select>
            </div>

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
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.date}</td>
                            <td className={transaction.type}>{transaction.type}</td>
                            <td>${transaction.amount.toFixed(2)}</td>
                            <td className={transaction.status}>{transaction.status}</td>
                            <td>{transaction.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Transactions; 