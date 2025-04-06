import React, { useState } from 'react';
import './Support.css';

const Support = ({ user }) => {
    const [newTicket, setNewTicket] = useState({
        subject: '',
        category: 'general',
        message: ''
    });

    // Mock data for demonstration
    const tickets = [
        {
            id: 1,
            subject: 'Commission calculation issue',
            category: 'payment',
            status: 'open',
            date: '2023-01-15',
            lastUpdate: '2023-01-16'
        },
        {
            id: 2,
            subject: 'Referral system question',
            category: 'general',
            status: 'resolved',
            date: '2023-01-10',
            lastUpdate: '2023-01-12'
        }
    ];

    const handleChange = (e) => {
        setNewTicket({
            ...newTicket,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock ticket submission
        console.log('New ticket:', newTicket);
        setNewTicket({ subject: '', category: 'general', message: '' });
    };

    return (
        <div className="support">
            <h2>Support Center</h2>

            <div className="new-ticket">
                <h3>Create New Ticket</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={newTicket.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select
                            name="category"
                            value={newTicket.category}
                            onChange={handleChange}
                        >
                            <option value="general">General</option>
                            <option value="payment">Payment</option>
                            <option value="technical">Technical</option>
                            <option value="account">Account</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={newTicket.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Submit Ticket</button>
                </form>
            </div>

            <div className="ticket-history">
                <h3>Your Tickets</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Last Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map(ticket => (
                            <tr key={ticket.id}>
                                <td>{ticket.subject}</td>
                                <td>{ticket.category}</td>
                                <td className={ticket.status}>{ticket.status}</td>
                                <td>{ticket.date}</td>
                                <td>{ticket.lastUpdate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Support; 