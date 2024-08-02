import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl mb-4">About SPARK Ada</h1>
                <p>This platform is dedicated to teaching the SPARK Ada programming language...</p>
            </main>
            <Footer />
        </div>
    );
};

export default About;
