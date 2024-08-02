import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-600 p-4 text-white">
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-gray-300">About</Link>
                </li>
                <li>
                    <Link to="/courses" className="hover:text-gray-300">Courses</Link>
                </li>
                <li>
                    <Link to="/spark-ada-basics" className="hover:text-gray-300">SPARK Ada</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
