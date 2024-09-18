import React from 'react';
import { tutorialData } from '../data/gnatexeData';

const GnatSparkAdaExe: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">{tutorialData.title}</h1>

            {tutorialData.sections.map((section, index) => (
                <section key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold">{section.heading}</h2>
                    <p className="mt-4">{section.text}</p>

                    {section.code && (
                        <pre className="bg-gray-900 text-white p-4 rounded-md shadow-md my-4">
                            {section.code}
                        </pre>
                    )}

                    {section.image && (
                        <img
                            src={section.image}
                            alt={`${section.heading}`}
                            className="my-4 rounded-lg shadow-md"
                        />
                    )}
                </section>
            ))}
        </div>
    );
};

export default GnatSparkAdaExe;
