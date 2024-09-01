import React from 'react';
import Editor from '@monaco-editor/react';

// Define the props for the CodeEditor component
interface CodeEditorProps {
    value: string;
    onChange: (value: string | undefined) => void;
    language?: string;
    height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ value, onChange, language = 'c++', height = '400px' }) => {
    return (
        <Editor
            height={height}
            language={language}
            value={value}
            onChange={onChange}
            theme="vs-dark" // Using a built-in theme
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
