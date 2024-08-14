import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ExpandableSidebarItemProps {
    name: string;
    subItems: { name: string; path: string }[];
}

const ExpandableSidebarItem: React.FC<ExpandableSidebarItemProps> = ({ name, subItems }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="block w-full text-left py-2 px-4 hover:bg-gray-600 focus:outline-none"
            >
                {name}
            </button>
            {isExpanded && (
                <ul className="pl-4">
                    {subItems.map((subItem, index) => (
                        <li key={index}>
                            <Link
                                to={subItem.path}
                                className="block py-2 px-4 hover:bg-gray-600"
                            >
                                {subItem.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpandableSidebarItem;