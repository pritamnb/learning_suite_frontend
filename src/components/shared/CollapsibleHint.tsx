import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";


const CollapsibleHint: React.FC<{ hint: any }> = ({ hint }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center mb-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center p-2 border rounded hover:bg-gray-200"
            >
                <FaLightbulb className={`mr-2 ${isOpen ? 'text-yellow-500' : 'text-yellow-500'}`} />
                <span className="text-sm">Hint</span>
            </button>
            {isOpen && (
                <div className="mt-2 p-2 bg-gray-100 border rounded">
                    {hint.split('\n').map((line: any, index: any) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            )}
        </div>
    );
};
export default CollapsibleHint;