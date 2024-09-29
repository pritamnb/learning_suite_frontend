import React from 'react';
import { tutorialData } from '../data/gnatexeData';

const GnatSparkAdaExe: React.FC = () => {
    return (
        <div className="mx-auto p-4 bg-slate-50">
            <h1 className="text-3xl font-bold mb-6">{tutorialData.title}</h1>

            {tutorialData.sections.map((section, index) => (
                <section key={index} className="mb-8">
                    <h2 className="text-2xl font-semibold">{section.heading}</h2>
                    <p className="mt-4">{section.text}</p>

                    {section.code && (
                        <pre className="bg-gray-900 text-white p-4 rounded-md shadow-md my-4 overflow-auto"
                            style={{ maxHeight: '40vh', width: "80%", objectFit: 'contain' }}>
                            {section.code}
                        </pre>
                    )}

                    {section.image && (
                        <img
                            src={section.image}
                            alt={`${section.heading}`}
                            className=" mb-4 rounded-lg shadow-lg"
                            style={{ maxHeight: '40vh', width: "60%", objectFit: 'contain' }}
                        />
                    )}
                </section>
            ))}
        </div>
    );
};

export default GnatSparkAdaExe;
