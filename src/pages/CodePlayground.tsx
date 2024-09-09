import React, { useEffect, useState } from 'react';
import Playground from './Playground';
import AdaMaterial from '../data/AdaMaterial.json'; 


const CodePlayground: React.FC = () => {

    const [jsonData, setJsonData] = useState<
    {
      "Section Name": string;
      topics: { topic: string; description: string; code: string }[];
    }[]
  >([]);

  useEffect(() => {
    setJsonData(AdaMaterial); // Set the JSON data (from your file or import)
  }, []);

    return (
        <div>
            {jsonData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                <h1>{section["Section Name"]}</h1>

                {section.topics.map((topic, topicIndex) => (
                    <Playground
                    topicName={topic.topic}
                    bootStrapCode={topic.code}
                    description={topic.description}
                    />
                ))}
                </div>
            ))}
        </div>
    );
};

export default CodePlayground;
