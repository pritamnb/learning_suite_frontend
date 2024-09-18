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
]
interface File {
    name?: string;
    language?: string;
    content?: string;
}
interface sparAdaProps {
    files: File[],
    body: string,
    buttonName: string
}
const SparkAda: React.FC<sparAdaProps> = ({ files, body = '', buttonName = 'Run Code' }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-4xl mb-4">  </h1>
                <p className="mb-4">
                    {body &&
                        body
                    }
                </p>
                <h2 className="text-2xl mb-2">Files</h2>
                <div>
                    <FileViewer files={files ? files : defaultFiles} buttonName={buttonName} />
                </div>
            </main>
        </div>
    );
};

export default SparkAda