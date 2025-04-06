import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    const location = useLocation();

    const menuItems = [
        {
            title: 'Dashboard',
            path: '/dashboard',
            icon: 'dashboard'
        },
        {
            title: 'Network',
            path: '/network',
            icon: 'people'
        },
        {
            title: 'Wallet',
            path: '/wallet',
            icon: 'account_balance_wallet'
        },
        {
            title: 'Transactions',
            path: '/transactions',
            icon: 'receipt'
        },
        {
            title: 'Commissions',
            path: '/commissions',
            icon: 'payments'
        },
        {
            title: 'Referrals',
            path: '/referrals',
            icon: 'share'
        },
        {
            title: 'Ranks',
            path: '/ranks',
            icon: 'military_tech'
        },
        {
            title: 'Packages',
            path: '/packages',
            icon: 'card_membership'
        },
        {
            title: 'Support',
            path: '/support',
            icon: 'support'
        },
        {
            title: 'Documents',
            path: '/documents',
            icon: 'folder'
        },
        {
            title: 'Settings',
            path: '/settings',
            icon: 'settings'
        }
    ];

    return (
        <nav className="navigation">
            <div className="logo">
                <h2>MLM System</h2>
            </div>
            <ul className="menu">
                {menuItems.map((item) => (
                    <li key={item.path} className={location.pathname === item.path ? 'active' : ''}>
                        <Link to={item.path}>
                            <span className="material-icons">{item.icon}</span>
                            <span>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation; 