import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import axios from 'axios';

const SparkAdaBasics: React.FC = () => {
    const [code, setCode] = useState<string>(`procedure Hello is
begin
   Put_Line ("Hello, SPARK Ada!");
end Hello;`);
    const [output, setOutput] = useState<string | null>(null);

    const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCode(event.target.value);
    };

    const handleRunCode = async () => {
        try {
            const response = await axios.post('/api/run-spark-ada', { code });
            setOutput(response.data.output);
        } catch (error) {
            setOutput('Error executing code');
        }
    };

    return (
        <div>
            <Navbar />
            <main className="p-8">
                <h1 className="text-4xl mb-4">Basics of SPARK Ada</h1>
                <p className="mb-4">
                    SPARK is a subset of the Ada programming language designed for high-integrity and high-assurance systems. It includes a range of features for writing reliable and maintainable software.
                </p>
                <h2 className="text-2xl mb-2">Sample Code</h2>
                <pre className="bg-gray-200 p-4 rounded mb-4">
                    <code>
                        {`procedure Hello is
begin
   Put_Line ("Hello, SPARK Ada!");
end Hello;`}
                    </code>
                </pre>
                <h2 className="text-2xl mb-2">Try it Yourself</h2>
                <textarea
                    className="w-full h-48 p-2 mb-4 border border-gray-300 rounded"
                    value={code}
                    onChange={handleCodeChange}
                ></textarea>
                <Button onClick={handleRunCode}>Run Code</Button>
                {output && (
                    <div className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
                        <h3 className="text-xl mb-2">Output</h3>
                        <pre>{output}</pre>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default SparkAdaBasics;
