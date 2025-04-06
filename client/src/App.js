import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Navigation from './components/Navigation';
import Network from './components/Network';
import Wallet from './components/Wallet';
import Transactions from './components/Transactions';
import Commissions from './components/Commissions';
import Referrals from './components/Referrals';
import Ranks from './components/Ranks';
import Packages from './components/Packages';
import Support from './components/Support';
import Documents from './components/Documents';
import Settings from './components/Settings';
import './App.css';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const handleLogin = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <Router>
            <div className="app">
                {isAuthenticated && <Navigation />}
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={
                            isAuthenticated ? 
                            <Navigate to="/dashboard" /> : 
                            <Login onLogin={handleLogin} />
                        } />
                        <Route path="/register" element={
                            isAuthenticated ? 
                            <Navigate to="/dashboard" /> : 
                            <Register />
                        } />
                        <Route path="/dashboard" element={
                            isAuthenticated ? 
                            <Dashboard user={user} onLogout={handleLogout} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/network" element={
                            isAuthenticated ? 
                            <Network user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/wallet" element={
                            isAuthenticated ? 
                            <Wallet user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/transactions" element={
                            isAuthenticated ? 
                            <Transactions user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/commissions" element={
                            isAuthenticated ? 
                            <Commissions user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/referrals" element={
                            isAuthenticated ? 
                            <Referrals user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/ranks" element={
                            isAuthenticated ? 
                            <Ranks user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/packages" element={
                            isAuthenticated ? 
                            <Packages user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/support" element={
                            isAuthenticated ? 
                            <Support user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/documents" element={
                            isAuthenticated ? 
                            <Documents user={user} /> : 
                            <Navigate to="/" />
                        } />
                        <Route path="/settings" element={
                            isAuthenticated ? 
                            <Settings user={user} /> : 
                            <Navigate to="/" />
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
