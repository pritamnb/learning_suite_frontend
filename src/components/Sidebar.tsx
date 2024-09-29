
import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active state
import { FaChevronLeft, FaChevronRight, FaSlidersH } from 'react-icons/fa';
import ExpandableSidebarItem from './ExpandibleSidebarItems';
import { sidebarItems } from '../config/sidebarItems';

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`z-20 bg-[#2980b9] text-white duration-300 ${isOpen ? 'w-64' : 'w-16'} fixed h-full overflow-y-auto flex flex-col`}
        >
            <div className="flex items-center pl-2 mt-2 bg-[#2980b9] sticky top-0 z-10">
                <div
                    className="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-all duration-300"
                    onClick={toggleSidebar}
                >
                    <FaSlidersH className="text-white" size={24} />
                </div>
                {isOpen && (
                    <span className="ml-4 text-xl font-bold">Learn SPARK Ada</span>
                )}
            </div>
            <ul className="mt-2 space-y-2 bg-white text-black flex-grow">
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
                            <NavLink
                                to={item.path || '#'}
                                className={({ isActive }) =>
                                    `w-full py-2 px-4 flex items-center transition-all duration-300 ${isActive ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100'
                                    }`
                                }
                            >
                                <div
                                    className={`mr-2 transition-all duration-300 ${isOpen ? 'w-6 h-6' : 'w-4 h-4'}`}
                                >
                                    {item.icon && <item.icon size={24} />}
                                </div>
                                {isOpen && <span>{item.name}</span>}
                            </NavLink>
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default Sidebar;
