import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight, FaSlidersH } from 'react-icons/fa'; // Import toggle icons
import ExpandableSidebarItem from './ExpandibleSidebarItems';
import { sidebarItems } from '../config/sidebarItems';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`z-20 bg-gray-800 text-white duration-300 ${isOpen ? 'w-64' : 'w-16'
                } fixed h-full overflow-y-auto flex flex-col`}
        >
            <div className="flex items-center pl-4 pt-4 bg-gray-800 sticky top-0 z-10">
                <div
                    className="cursor-pointer p-2 hover:bg-gray-700 rounded-full transition-all duration-300"
                    onClick={toggleSidebar}
                >
                    {isOpen ? (
                        <FaSlidersH className="text-white" size={24} />
                    ) : (
                        <FaSlidersH className="text-white" size={24} />
                    )}
                </div>
                {isOpen && (
                    <span className="ml-4 text-xl font-bold">Learn SPARK Ada</span>
                )}
            </div>
            <ul className="mt-2 space-y-2 px-2 flex-grow">
                {sidebarItems.map((item: any, index) =>
                    item?.subItems ? (
                        <ExpandableSidebarItem
                            key={index}
                            name={item.name}
                            subItems={item.subItems}
                            isOpen={isOpen}
                        />
                    ) : (
                        <li key={index} className="flex items-center">
                            <Link
                                to={item.path || '#'}
                                className="w-full py-2 px-4 hover:bg-gray-600 flex items-center"
                            >
                                <div
                                    className={`mr-2 transition-all duration-300 ${isOpen ? 'w-6 h-6' : 'w-4 h-4'
                                        }`}
                                >
                                    {item.icon && <item.icon size={24} />}
                                </div>
                                {isOpen && <span>{item.name}</span>}
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
