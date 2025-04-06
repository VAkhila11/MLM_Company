import React, { useState } from 'react';
import './Settings.css';

const Settings = ({ user }) => {
    const [settings, setSettings] = useState({
        email: user?.email || '',
        phone: '',
        password: '',
        confirmPassword: '',
        notifications: {
            email: true,
            sms: false,
            commission: true,
            rank: true,
            referral: true
        },
        twoFactor: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setSettings({
                ...settings,
                notifications: {
                    ...settings.notifications,
                    [name]: checked
                }
            });
        } else {
            setSettings({
                ...settings,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock settings update
        console.log('Updating settings:', settings);
    };

    return (
        <div className="settings">
            <h2>Account Settings</h2>

            <div className="settings-section">
                <h3>Profile Information</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={settings.phone}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>

            <div className="settings-section">
                <h3>Security</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>New Password</label>
                        <input
                            type="password"
                            name="password"
                            value={settings.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm New Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={settings.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="twoFactor"
                                checked={settings.twoFactor}
                                onChange={handleChange}
                            />
                            Enable Two-Factor Authentication
                        </label>
                    </div>
                </form>
            </div>

            <div className="settings-section">
                <h3>Notification Preferences</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="email"
                                checked={settings.notifications.email}
                                onChange={handleChange}
                            />
                            Email Notifications
                        </label>
                    </div>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="sms"
                                checked={settings.notifications.sms}
                                onChange={handleChange}
                            />
                            SMS Notifications
                        </label>
                    </div>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="commission"
                                checked={settings.notifications.commission}
                                onChange={handleChange}
                            />
                            Commission Notifications
                        </label>
                    </div>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="rank"
                                checked={settings.notifications.rank}
                                onChange={handleChange}
                            />
                            Rank Update Notifications
                        </label>
                    </div>
                    <div className="form-group checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="referral"
                                checked={settings.notifications.referral}
                                onChange={handleChange}
                            />
                            Referral Notifications
                        </label>
                    </div>
                    <button type="submit">Save Changes</button>
                </form>
            </div>
        </div>
    );
};

export default Settings; 