import React from 'react';
import Editor from '@monaco-editor/react';

// Define the props for the CodeEditor component
interface CodeEditorProps {
    value: string;
    onChange: (value: string | undefined) => void;
    language?: string;
    height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language = 'ada', height = '300px' }) => {
    return (
        <Editor
            height={height}
            language={language}
            value={value}
            onChange={onChange}
            width={'60%'}
            theme="vs-dark"

            options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: 'on',
                automaticLayout: true,

            }}
        />
    );
};

export default CodeEditor;
