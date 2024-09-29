import React from 'react';
import FileViewer from '../components/FileViewer';

const files = [
    {
        name: 'main.ads',
        language: 'ada',
        content: `pragma SPARK_Mode(On); 

package Main is
   function Add (X, Y : Integer) return Integer
     with Pre => (Y >= 0 and then X <= Integer'Last - Y) or else
                 (Y < 0 and then X >= Integer'First - Y);
     -- Precondition ensures no overflow or underflow occurs.
end Main;
`,
    },
    {
        name: 'main.adb',
        language: 'ada',
        content: `pragma SPARK_Mode(On); 

package body Main is

   function Add (X, Y : Integer) return Integer is
   begin
      return X + Y;
   end Add;

end Main;   
`,
    },
];

const SparkAdaBasics: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-4xl mb-4">SPARK Ada Playground</h1>
                <p className="mb-4">
                    Directly in a web browser, a SPARK Ada playground is an interactive tool enabling users to write, run, and validate SPARK Ada code without local installation. Usually it includes code editors, real-time error checking, and formal verification tools including GNATprove. Learning and experimenting with SPARK Ada would be best suited for this configuration since it offers quick feedback and lets users investigate SPARK's features in a controlled and easily available surroundings.
                </p>
                <h2 className="text-2xl mb-2">Sample Files</h2>
                <div>
                    <FileViewer files={files} buttonName={'Prove'} exe='prove' />
                </div>
            </main>
        </div>
    );
};

export default SparkAdaBasics;
