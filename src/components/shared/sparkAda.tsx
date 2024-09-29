import React from 'react';
import FileViewer from "../FileViewer";

const defaultFiles = [
    {
        name: 'main.ads',
        language: 'ada',
        content: ''
    },
    {
        name: 'main.adb',
        language: 'ada',
        content: ''
    }
];

interface File {
    name?: string;
    language?: string;
    content?: string;
}

interface SparkAdaProps {
    files: File[],
    body: string,
    buttonName: string,
    exe?: string
}

const SparkAda: React.FC<SparkAdaProps> = ({ files, body = '', buttonName = 'Run Code', exe = 'examine' }) => {
    return (
        <div className="flex flex-col">
            <main className="flex-grow">
                {body && <p className="mb-4">{body}</p>}

                <h2 className="text-2xl mb-2">Files</h2>
                <div>
                    <FileViewer files={files.length ? files : defaultFiles} buttonName={buttonName} exe={exe} />
                </div>
            </main>
        </div>
    );
};

export default SparkAda;
