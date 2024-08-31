import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from '../../components/CodeEditor';
import Button from '../../components/Button';

const Case: React.FC = () => {
    const [code, setCode] = useState<string>(`with Ada.Text_IO; use Ada.Text_IO;
procedure Example is
begin
   Put_Line("This is an If/Then/Else example in Ada");
end Example;`);
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
            <main className="flex-grow">
                <h1 className="text-4xl mb-4">Cases in Ada</h1>
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

export default Case;
