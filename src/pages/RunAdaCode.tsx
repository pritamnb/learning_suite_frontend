import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/CodeEditor';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const RunAdaCode: React.FC = () => {
    const [code, setCode] = useState<string>(`with Ada.Text_IO; use Ada.Text_IO;
procedure Hello is
begin
   Put_Line ("Hello, SPARK Ada!");
end Hello;`);
    const [output, setOutput] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

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
            <Navbar />
            <main className="flex-grow p-8">
                <h1 className="text-4xl mb-4">Run Ada Code</h1>
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
            <Footer />
        </div>
    );
};

export default RunAdaCode;
