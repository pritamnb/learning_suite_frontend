import React, { useEffect, useState } from 'react';
import starterPackData from '../../data/starter.json';
import CodeEditor from '../../components/codeEditor';
import SparkAda from '../../components/shared/sparkAda';

interface Step {
    step?: number;
    title?: string;
    description: string;
    code?: {
        name: string;
        language: string;
        content: string;
    }[];
}

interface StarterPackData {
    title?: string;
    description?: string;
    note?: string;
    prerequisites?: string[];
    key_features: any[];
    steps?: Step[];
}

const Overview: React.FC = () => {
    const [data, setData] = useState<StarterPackData | null>(null);
    const [code, setCode] = useState<string>();

    useEffect(() => {
        setData(starterPackData);
    }, []);
    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
    };
    return (
        <div className="mx-auto p-4 bg-slate-50">
            {data && (
                <>
                    <h1 className="text-2xl font-bold">{data.title}</h1>
                    <p>{data.description}</p>



                    <h2 className="text-xl font-semibold">Key Features</h2>
                    <ul className="list-disc list-inside">
                        {data.key_features?.map((feature, index) => (
                            <li key={index}>
                                <strong>{feature.feature}:</strong> {feature.description}
                            </li>
                        ))}
                    </ul>

                    {data?.steps?.map((step, index) => (
                        <div key={index} className="mt-5">
                            <h3 className="text-lg font-semibold">
                                Step {step.step}: {step.title}
                            </h3>
                            <p>{step.description}</p>
                            {step.code && (

                                <div>
                                    <SparkAda files={step.code} body='' buttonName='Examine' exe='examine'></SparkAda>
                                </div>
                            )}
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default Overview;
