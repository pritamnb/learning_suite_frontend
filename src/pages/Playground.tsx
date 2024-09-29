import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/codeEditor';
import Button from '../components/Button';
import { configs } from '../config/config';
export interface ChildComponentProps {
    topicName: string;
    bootStrapCode: string;
    description: string;
}
const { endpoint } = configs;
const Playground: React.FC<ChildComponentProps> = ({ topicName, bootStrapCode, description }) => {
    const [code, setCode] = useState<string>(bootStrapCode);
    const [output, setOutput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setCode(bootStrapCode);
    }, [bootStrapCode]);

    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
    };

    const handleRunCode = async () => {
        setLoading(true);
        setError('');
        try {
            const response = await axios.post(`${endpoint}/api/run-ada`, { code });
            setOutput(response?.data?.output);
        } catch (err) {
            setError('Failed to run the code');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col ">
            <main className="flex-grow  p-4">
                <h2 className="text-xl font-bold mb-4 ">{topicName}</h2>
                <h3 className="text-lg text-gray-700 mb-4 ">{description}</h3>
                <CodeEditor value={code} onChange={handleCodeChange} language="ada" />
                <div className='pt-4'>
                    <Button onClick={handleRunCode} disabled={loading} >
                        {loading ? 'Running...' : 'Run Code'}
                    </Button>
                </div>
                {output && (
                    <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Output</h3>
                        <pre className="whitespace-pre-wrap">{output}</pre>
                    </div>
                )}
                {error && (
                    <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2 text-red-700">Error</h3>
                        <p>{error}</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Playground;
