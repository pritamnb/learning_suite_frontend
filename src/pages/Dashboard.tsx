import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-8">
                <h1 className="text-4xl mb-4">Dashboard</h1>
                <p>Welcome to your Dashboard!</p>

            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;
