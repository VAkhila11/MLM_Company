import React from 'react';
import './Wallet.css';

const Wallet = ({ user }) => {
    // Mock data for demonstration
    const walletData = {
        balance: 1000.00,
        recentTransactions: [
            { id: 1, type: 'credit', amount: 500.00, date: '2023-01-15', description: 'Commission' },
            { id: 2, type: 'debit', amount: 200.00, date: '2023-01-20', description: 'Withdrawal' },
            { id: 3, type: 'credit', amount: 300.00, date: '2023-02-01', description: 'Bonus' }
        ]
    };

    return (
        <div className="wallet">
            <h2>Wallet</h2>
            <div className="balance-card">
                <h3>Current Balance</h3>
                <p className="highlight">${walletData.balance.toFixed(2)}</p>
            </div>

            <div className="transaction-history">
                <h3>Recent Transactions</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {walletData.recentTransactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td className={transaction.type}>{transaction.type}</td>
                                <td>${transaction.amount.toFixed(2)}</td>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wallet; 