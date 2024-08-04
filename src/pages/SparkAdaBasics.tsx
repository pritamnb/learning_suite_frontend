import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CodeEditor from '../components/codeEditor';
import { runSparkAdaCode } from '../store/sparkAdaActions';
import { AppState, AppDispatch } from '../store';
import Button from '../components/Button';

const SparkAdaBasics: React.FC = () => {
    const [code, setCode] = useState<string>(`procedure Hello is
begin
   Put_Line ("Hello, SPARK Ada!");
end Hello;`);

    const dispatch = useDispatch<AppDispatch>();
    const { loading, output, error } = useSelector((state: AppState) => state.sparkAda);

    const handleCodeChange = (value: string | undefined) => {
        setCode(value || '');
    };

    const handleRunCode = () => {
        dispatch(runSparkAdaCode(code));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-8">
                <h1 className="text-4xl mb-4">Basics of SPARK Ada</h1>
                <p className="mb-4">
                    SPARK is a subset of the Ada programming language designed for high-integrity and high-assurance systems. It includes a range of features for writing reliable and maintainable software.
                </p>
                <h2 className="text-2xl mb-2">Sample Code</h2>
                <h2 className="text-2xl mb-2">Try it Yourself</h2>
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
                        <h3 className="text-xl mb-2 text-red-700">{error?.error}</h3>
                        <pre className='overflow-scroll'>{error?.details}</pre>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SparkAdaBasics;
