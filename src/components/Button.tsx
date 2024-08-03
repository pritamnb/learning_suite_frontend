import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean; // Add the disabled prop here
}

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled} // Pass the disabled prop to the button element
            className={`px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${disabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
        >
            {children}
        </button>
    );
};

export default Button;
