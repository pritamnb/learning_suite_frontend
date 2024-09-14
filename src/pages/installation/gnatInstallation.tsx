import React, { useEffect, useState } from 'react';
import { gnat } from '../../data/gnatInstallation';
import { FaExclamationTriangle } from 'react-icons/fa';

interface Step {
    step: number;
    title: string;
    description: string;
    image?: string;
}

interface GuideData {
    title: string;
    steps: Step[];
}

// Function to render text with URLs and command blocks
const renderTextWithLinksAndCode = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s()]+)/g;
    const lines = text.split('\n'); // Split text by new lines

    return lines.map((line, index) => {
        if (line.match(urlRegex)) {
            // Split line by URLs and render them as clickable links
            const parts = line.split(urlRegex);
            return (
                <p key={index}>
                    {parts.map((part, i) =>
                        part.match(urlRegex) ? (
                            <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                {part}
                            </a>
                        ) : (
                            part
                        )
                    )}
                </p>
            );
        }

        // Render lines that start with $ or contain certain keywords as code
        if (line.trim().startsWith('$') || line.trim().includes('doinstall') || line.trim().includes('<SPARK') || line.trim().includes('<GNAT') || line.trim().includes('export') || line.trim().includes('setenv')) {
            return (
                <pre key={index} className="bg-slate-100 p-4 rounded mb-4 overflow-x-auto max-w-full">
                    <code>{line}</code>
                </pre>
            );
        }

        return <p key={index} className="mb-2">{line}</p>; // Render normal text lines
    });
};

const GnatStudioGuide: React.FC = () => {
    const [guideData, setGuideData] = useState<GuideData | null>(null);

    // Load the JSON data
    useEffect(() => {
        setGuideData(gnat); // Set data directly from imported JSON
    }, []);

    if (!guideData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="gnat-studio-guide mb-20 p-4 bg-slate-50 max-w-6xl overflow-x-hidden">
            <h1 className="text-2xl font-bold mb-4">{guideData.title}</h1>

            <div className="flex items-start p-4 mb-4 bg-yellow-50 border-l-4 border-yellow-400 shadow-md rounded-lg">
                <FaExclamationTriangle className="h-6 w-6 text-yellow-500 mr-3 flex-shrink-0" />
                <div>
                    <p className="font-semibold text-yellow-800"> Note :</p>
                    <p className="text-yellow-700">If you’re using GNAT Community instead of GNAT Pro, you should install instead the GNAT Community package, which installs GNAT Studio and SPARK.</p>
                </div>
            </div>

            {guideData.steps.map((step) => (
                <div key={step.step} className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">
                        Step {step.step}: {step.title}
                    </h2>
                    <div className="mb-4">{renderTextWithLinksAndCode(step.description)}</div>
                    {step.image && (
                        <img
                            src={step.image}
                            alt={`Step ${step.step}`}
                            className="max-w-full h-auto mb-4 rounded-lg shadow-lg"
                            style={{ maxHeight: '80vh', objectFit: 'contain' }}
                        />
                    )}
                </div>
            ))}
        </div>
    );
};

export default GnatStudioGuide;
