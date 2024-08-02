import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Courses: React.FC = () => {
    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl mb-4">Courses</h1>
                <p>Explore our courses on SPARK Ada programming...</p>
            </main>
            <Footer />
        </div>
    );
};

export default Courses;
