import React from 'react';
import { Link } from 'react-router-dom';
import ExpandableSidebarItem from './ExpandibleSidebarItems';
import { sidebarItems } from '../config/sidebarItems';

// Define the props type for the Sidebar component
interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`z-10 min-h-screen bg-gray-800 text-white  flex-none duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
            <div className=" flex fixed top-0 left-0 items-center pl-4 pt-4 bg-gray-800">
                <div className="cursor-pointer space-y-1" onClick={toggleSidebar}>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                    <div className="w-6 h-0.5 bg-white"></div>
                </div>
                {isOpen && (
                    <span className="ml-4 text-xl font-bold">
                        Learn SPARK Ada
                    </span>
                )}
            </div>
            <ul className="mt-16 space-y-2">
                {sidebarItems.map((item: any, index) => (
                    item?.subItems ? (
                        <ExpandableSidebarItem
                            key={index}
                            name={item.name}
                            subItems={item.subItems}
                            isOpen={isOpen}
                        />
                    ) : (
                        <li key={index} className="flex  items-center">
                            <Link
                                to={item.path || '#'}
                                className="block w-full py-2 px-4 hover:bg-gray-600 flex items-center"
                            >
                                {isOpen && <span>{item.name}</span>}
                            </Link>
                        </li>
                    )
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
