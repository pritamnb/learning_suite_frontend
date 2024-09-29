import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface NavbarProps {
    isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen }) => {
    return (
        <nav className={`bg-[#2980b9] z-10 fixed top-0 left-0 w-full text-white duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-16'} pt-4 pb-4 pr-4`}>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/" className="hover:text-gray-300 flex pl-2">
                        {/* <FaHome className="text-white mr-2" size={20} /> */}
                        Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-gray-100">About</Link>
                </li>
                <li>
                    <Link to="/courses" className="hover:text-gray-100">Courses</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
