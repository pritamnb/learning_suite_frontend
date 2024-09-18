import React from 'react';
import FileViewer from '../components/FileViewer';

// const files = [
//     {
//         name: 'increment.ads',
//         language: 'ada',
//         content: `pragma SPARK_Mode;        
// procedure Main
//   (X : in out Integer)
// with
//   Global  => null,
//   Depends => (X => X),
//   Pre     => X < Integer'Last,
//   Post    => X = X'Old + 1;`,
//     },
//     {
//         name: 'increment.adb',
//         language: 'ada',
//         content: `pragma SPARK_Mode;
// procedure Main
//   (X : in out Integer)
// is
// begin
//   X := X + 1;
// end Main;`,
//     },
// ];
const files = [
    {
        name: 'main.ads',
        language: 'ada',
        content: `pragma SPARK_Mode;
package Main is
     
   procedure add(input1_d1 : in Integer;input1_d2 : in Integer;input1_d3 : in Integer;input2_d1 : in Integer;input2_d2 : in Integer;input2_d3 : in Integer;
                       output1 : out Integer; output2 : out Integer; output3 : out Integer); 
     
end Main;
`,
    },
    {
        name: 'main.adb',
        language: 'ada',
        content: `pragma SPARK_Mode;
package body Main is
   
   procedure add (input1_d1 : in Integer;input1_d2 : in Integer;input1_d3 : in Integer;input2_d1 : in Integer;input2_d2 : in Integer;input2_d3 : in Integer;
                       output1 : out Integer;output2 : out Integer;output3 : out Integer) is
   temp1:Integer;
   temp2:Integer; 
   temp3:Integer;
   
   carry1: Integer := 0;
   carry2: Integer := 0;
   
  begin
   temp3 := input1_d3 + input2_d3;
   if temp3 < 10 then
      output3 := temp3;
   else
      output3 := temp3 - 10;
      carry1 := 1; 
   end if;
   temp2 := input1_d2 + input2_d2 + carry1;
   if temp2 < 10 then
      output2 := temp2;
   else
      output2 := temp2 - 10;
      carry2 := 1;   
   end if;
   temp1 := input1_d1 + input2_d1 + carry2;
   if temp1 < 10 then
      output1 := temp1;
   else
      output1 := temp1 - 10;
   end if;
 end add;

     
end Main;   
`,
    },
];

const SparkAdaBasics: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <h1 className="text-4xl mb-4">Basics of SPARK Ada</h1>
                <p className="mb-4">
                    SPARK is a subset of the Ada programming language designed for high-integrity and high-assurance systems. It includes a range of features for writing reliable and maintainable software.
                </p>
                <h2 className="text-2xl mb-2">Sample Files</h2>
                <div>
                    <FileViewer files={files} buttonName={'Prove'} />
                </div>
            </main>
        </div>
    );
};

export default SparkAdaBasics;
