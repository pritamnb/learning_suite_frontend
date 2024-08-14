import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FileViewer from '../components/FileViewer';

const files = [
    {
        name: 'increment.ads',
        language: 'ada',
        content: `procedure Increment
  (X : in out Integer)
with
  Global  => null,
  Depends => (X => X),
  Pre     => X < Integer'Last,
  Post    => X = X'Old + 1;`,
    },
    {
        name: 'increment.adb',
        language: 'ada',
        content: `procedure Increment
  (X : in out Integer)
is
begin
  X := X + 1;
end Increment;`,
    },
];

const SparkAdaBasics: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow p-8">
                <h1 className="text-4xl mb-4">Basics of SPARK Ada</h1>
                <p className="mb-4">
                    SPARK is a subset of the Ada programming language designed for high-integrity and high-assurance systems. It includes a range of features for writing reliable and maintainable software.
                </p>
                <h2 className="text-2xl mb-2">Sample Files</h2>
                <FileViewer files={files} />
            </main>
            <Footer />
        </div>
    );
};

export default SparkAdaBasics;
