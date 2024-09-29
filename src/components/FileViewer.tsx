import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { runSparkAdaFiles } from '../store/sparkAdaFilesActions';
import { AppState, AppDispatch } from '../store';
import Button from './Button';

interface File {
    name?: string;
    language?: string;
    content?: string;
}

interface FileViewerProps {
    files: File[];
    buttonName?: string;
    exe?: string;
}

const FileViewer: React.FC<FileViewerProps> = ({ files = [{}, {}], buttonName = 'Run Code', exe = 'examine' }) => {
    const [activeFileIndex, setActiveFileIndex] = useState(0);
    const [fileContents, setFileContents] = useState(files.map(file => file.content));
    const [verificationLevel, setVerificationLevel] = useState('0');
    const [verificationError, setVerificationError] = useState<string | null>(null);
    const [executedFileIndex, setExecutedFileIndex] = useState<number | null>(null);
    const [executedButtonIndex, setExecutedButtonIndex] = useState<number | null>(null); // Track button clicks

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
            if (numericLevel >= 0 && numericLevel <= 4) {
                setVerificationError(null);
            } else {
                setVerificationError('Verification level must be between 0 and 4');
            }
            setVerificationLevel(level);
        } else {
            setVerificationError('Verification level must be a number');
            setVerificationLevel(level);
        }
    };

    const handleRunCode = (exe = 'examine') => {
        if (verificationError === null) {
            const specFile = files[0]?.name;
            const bodyFile = files[1]?.name;
            dispatch(runSparkAdaFiles(specFile, bodyFile, fileContents[0], fileContents[1], verificationLevel, exe));

            // Set the executed file and button indices
            setExecutedFileIndex(activeFileIndex);
            setExecutedButtonIndex(activeFileIndex);
        }
    };

    return (
        <div className="flex flex-col ">
            <div className="flex">
                {files?.map((file, index) => (
                    <button
                        key={file.name}
                        onClick={() => handleFileChange(index)}
                        className={`px-4 py-2 ${activeFileIndex === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {file?.name}
                    </button>
                ))}
            </div>
            <div className="flex-grow">
                <Editor
                    height="30vh"
                    width={'80%'}
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

                <Button
                    onClick={() => handleRunCode(exe)}
                    disabled={loading && executedButtonIndex === activeFileIndex || verificationError !== null}
                >
                    {loading && executedButtonIndex === activeFileIndex ? 'Running...' : buttonName}
                </Button>

                {executedFileIndex !== null && output && (
                    <div id="output-area" className="output-area bg-gray-100 border border-gray-300 rounded p-4 mt-4 mb-10 h-64 overflow-hidden">
                        <div className="sticky top-0 bg-gray-100 p-2 border-b border-gray-300 z-10">
                            <div className="output_info console_output text-xl font-semibold">
                                Console Output:
                            </div>
                        </div>
                        <div className="output_console bg-white p-2 border border-gray-200 rounded h-full overflow-y-auto mt-2">
                            {output.split('\n').map((line, index) => (
                                <div key={index} className="output_line">{line}</div>
                            ))}
                        </div>
                    </div>
                )}

                {executedFileIndex !== null && error && (
                    <div id="error-area" className="output-area bg-red-100 border border-red-300 rounded p-4 mt-4 mb-10 h-64 overflow-hidden">
                        <div className="sticky top-0 bg-red-100 p-2 border-b border-red-300 z-10">
                            <div className="output_info console_output text-xl font-semibold text-red-700">
                                {error?.details?.error || "Error"}
                            </div>
                        </div>
                        <div className="output_console bg-white p-2 border border-red-200 rounded">
                            {error?.details?.details?.split('\n').map((line: any, index: any) => (
                                <div key={index} className="output_line text-red-700">{line}</div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FileViewer;
