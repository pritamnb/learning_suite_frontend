import React, { useState } from 'react';
import axios from 'axios';
import CodeEditor from '../components/codeEditor';
import Button from '../components/Button';
import { configs } from '../config/config';
const { endpoint } = configs;

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
            const response = await axios.post(`${endpoint}/api/run-ada`, { code });
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
                <h1 className="text-4xl mb-4">Ada Playground</h1>
                <p className='mb-4'>
                    An Ada playground is an interactive tool available directly in a web browser that lets users run, write, and test Ada code without local setup needed. Usually it comprises a code editor, syntactic highlighting, error checking, and code editing capability to compile and run Ada programs in real-time. Learning and experimenting with Ada in this environment is perfect since it offers instantaneous feedback and lets users investigate Ada's features in an easily accessible and user-friendly surroundings.
                </p>
                <CodeEditor value={code} onChange={handleCodeChange} language="ada" height="400px" />
                <div className='pt-4'>
                    <Button onClick={handleRunCode} disabled={loading}>
                        {loading ? 'Running...' : 'Run Code'}
                    </Button>
                </div>
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

export default RunAdaCode;
