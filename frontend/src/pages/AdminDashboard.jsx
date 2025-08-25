import React from 'react'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {

    const { user, loading } = useAuth();
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading ....</div>
    }
    if (!user) {
        navigate('/login');
    }

    return (
        <div>
            Admin Dashboard
            <h1>{user && user.name}</h1>
        </div>
    )
}

export default AdminDashboard
