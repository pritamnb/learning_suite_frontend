import React from 'react';
import Button from '../components/Button';

const Home: React.FC = () => {
    return (
        <div>
            <main className="p-8">
                <h1 className="text-4xl mb-4">Welcome to the SPARK Ada Learning Platform</h1>
                <Button onClick={() => alert('Start Learning')}>Start Learning</Button>
            </main>
        </div>
    );
};

export default Home;
