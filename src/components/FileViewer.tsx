import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { runSparkAdaFiles } from '../store/sparkAdaFilesActions';
import { AppState, AppDispatch } from '../store';
import Button from './Button';

interface File {
    name: string;
    language: string;
    content: string;
}

interface FileViewerProps {
    files: File[];
}

const FileViewer: React.FC<FileViewerProps> = ({ files }) => {
    const [activeFileIndex, setActiveFileIndex] = useState(0);
    const [fileContents, setFileContents] = useState(files.map(file => file.content));
    const [verificationLevel, setVerificationLevel] = useState('0');
    const [verificationError, setVerificationError] = useState<string | null>(null);

    const dispatch = useDispatch<AppDispatch>();
    const { loading, output, error } = useSelector((state: AppState) => state.sparkAdaFiles);

    const handleFileChange = (index: number) => {
        setActiveFileIndex(index);
    };

    const handleCodeChange = (value: string | undefined) => {
        const newContents = [...fileContents];
        newContents[activeFileIndex] = value || '';
        setFileContents(newContents);
    };

    const handleVerificationLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const level = e.target.value;
        if (/^\d+$/.test(level)) {
            const numericLevel = parseInt(level, 10);
            if (numericLevel >= 0 && numericLevel <= 3) {
                setVerificationError(null);
            } else {
                setVerificationError('Verification level must be between 0 and 3');
            }
            setVerificationLevel(level);
        } else {
            setVerificationError('Verification level must be a number');
            setVerificationLevel(level);
        }
    };

    const handleRunCode = () => {
        if (verificationError === null) {
            dispatch(runSparkAdaFiles(fileContents[0], fileContents[1], verificationLevel));
        }
    };

    return (
        <div className="flex flex-col h-full">
            <div className="flex">
                {files.map((file, index) => (
                    <button
                        key={file.name}
                        onClick={() => handleFileChange(index)}
                        className={`px-4 py-2 ${activeFileIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {file.name}
                    </button>
                ))}
            </div>
            <div className="flex-grow">
                <Editor
                    height="50vh"
                    language={files[activeFileIndex].language}
                    value={fileContents[activeFileIndex]}
                    onChange={handleCodeChange}
                    theme="vs-dark"
                    options={{
                        minimap: { enabled: false },
                        fontSize: 14,
                        lineNumbers: 'on',
                        automaticLayout: true,
                    }}
                />
                <div className="mt-4">
                    <label htmlFor="verificationLevel" className="mr-2">Verification Level:</label>
                    <input
                        id="verificationLevel"
                        type="text"
                        value={verificationLevel}
                        onChange={handleVerificationLevelChange}
                        className="border p-2"
                    />
                    {verificationError && (
                        <div className="text-red-500 mt-2">{verificationError}</div>
                    )}
                </div>
                <Button onClick={handleRunCode} disabled={loading || verificationError !== null}>
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
                        <h3 className="text-xl mb-2 text-red-700">{error?.details?.error}</h3>
                        <pre className="overflow-scroll">{error?.details?.details}</pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileViewer;
