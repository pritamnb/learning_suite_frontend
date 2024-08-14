import React, { useState } from 'react';
import ExpandableSidebarItem from './ExpandibleSidebarItems';
import { sidebarItems } from '../config/sidebarItems';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className={`bg-gray-800 text-white ${isOpen ? 'w-64' : 'w-16'} duration-300 min-h-screen`}>
                <div className="flex items-center p-3 bg-gray-700 hover:bg-gray-600">
                    {/* Hamburger Icon */}
                    <div className="cursor-pointer space-y-1" onClick={toggleSidebar}>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                        <div className="w-6 h-0.5 bg-white"></div>
                    </div>
                    {/* Title */}
                    {isOpen && (
                        <span className="ml-4 text-xl font-bold">
                            Learn SPARK Ada
                        </span>
                    )}
                </div>
                <ul className={`mt-4 space-y-2 ${!isOpen && 'hidden'}`}>
                    {sidebarItems.map((item: any, index) => (
                        item?.subItems ? (
                            <ExpandableSidebarItem
                                key={index}
                                name={item?.name}
                                subItems={item?.subItems}
                            />
                        ) : (
                            <li key={index}>
                                <Link
                                    to={item.path || '#'}
                                    className="block py-2 px-4 hover:bg-gray-600"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;
