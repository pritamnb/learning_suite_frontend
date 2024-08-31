import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen }) => {
    return (
        <nav className={`bg-gray-800 fixed top-0 left-0 w-full text-white duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-16'} pt-4 pb-4 pr-4`}>
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
            </ul>
        </nav>
    );
};

export default Navbar;
