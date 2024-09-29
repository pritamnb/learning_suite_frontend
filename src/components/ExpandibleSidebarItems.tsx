
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface ExpandableSidebarItemProps {
    name: string;
    subItems: { name: string; path: string }[];
    isOpen: boolean;
}

const ExpandableSidebarItem: React.FC<ExpandableSidebarItemProps> = ({ name, subItems, isOpen }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="block w-full text-left py-2 px-4 hover:bg-gray-100 focus:outline-none flex items-center"
            >
                {isOpen ? name : '+'}
            </button>
            {isExpanded && isOpen && (
                <ul className="pl-4">
                    {subItems.map((subItem, index) => (
                        <li key={index}>
                            <NavLink
                                to={subItem.path}
                                className={({ isActive }) =>
                                    `block py-2 px-4 transition-all duration-300 ${isActive ? 'bg-gray-200 text-blue-600' : 'hover:bg-gray-100'
                                    }`
                                }
                            >
                                {subItem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpandableSidebarItem;
