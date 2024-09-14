import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/codeEditor';
import Button from '../components/Button';

export interface ChildComponentProps {
    topicName: string;
    bootStrapCode: string;
    description: string; 
}

const Playground: React.FC<ChildComponentProps> = ({topicName, bootStrapCode, description}) => {
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
            const response = await axios.post('http://localhost:8000/api/run-ada', { code });
            setOutput(response.data.output);
        } catch (err) {
            setError('Failed to run the code');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-4xl mb-4">{topicName}</h1>
                <h3>{description}</h3>
                <CodeEditor value={code} onChange={handleCodeChange} language="ada" height="400px" />
                <Button onClick={handleRunCode} disabled={loading}>
                    {loading ? 'Running...' : 'Run Code'}
                </Button>
                {output && (
                    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
                        <h3 className="text-xl mb-2">Output</h3>
                        <pre>{output}</pre>
                    </div>
                )}
                {error && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded">
                        <h3 className="text-xl mb-2 text-red-700">{error}</h3>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Playground;
