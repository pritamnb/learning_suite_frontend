import examine from '../assets/images/gnatExecution/examine.jpg'
import proveAll from '../assets/images/gnatExecution/proveAll.png'
import buildRun from '../assets/images/gnatExecution/buildRun.png'
interface Section {
   heading: string;
   text: string;
   code: string;
   image?: string;
}

interface TutorialProps {
   title: string;
   sections: Section[];
}

export const tutorialData: TutorialProps = {
   title: "SPARK Ada Square Function Tutorial",
   sections: [
      {
         heading: "Introduction to SPARK Ada",
         text: `SPARK Ada is a formally verifiable subset of Ada, designed for high-assurance systems. 
               In this tutorial, we will write a SPARK Ada function to compute the square of a non-negative integer. 
               The function will handle integer overflow and be verified using GNATprove, ensuring that the program is free of run-time errors.`,
         code: ``,
      },
      {
         heading: "Package Specification (square.ads)",
         text: `The package specification defines the function Square, which takes a non-negative integer as input and returns its square. 
               It includes preconditions and postconditions to ensure correctness and prevent overflow.`,
         code: `
-- square.ads
-- Specification for Square Function
pragma SPARK_Mode(On);

package Square is

   -- Function to compute the square of a number
   function Square (X : Integer) return Integer
   with
      Pre  => X > 0, -- Precondition: X must be non-negative
      Post => (if X > 0 and X <= Integer'Last / X then Square'Result = X * X
               else Square'Result = Integer'Last); -- Postcondition accounts for overflow

end Square;
 `,
      },
      {
         heading: "Package Body (square.adb)",
         text: `The package body contains the implementation of the Square function. 
               It checks for overflow and returns the maximum integer value Integer'Last in case of overflow.`,
         code: `
  -- square.adb
-- Body for Square Function
pragma SPARK_Mode(On);

package body Square is

   function Square (X : Integer) return Integer is
   begin
      -- Special case: The square of 0 is always 0
      if X = 0 then
         return 0;
      -- Overflow check: Ensure that X * X won't exceed the range of a 32-bit integer
      elsif X > Integer'Last / X then
         return Integer'Last; -- Return the maximum possible integer value in case of overflow
      else
         return X * X;
      end if;
   end Square;

end Square;
 `,
      },
      {
         heading: "Main Program (main.adb)",
         text: `The main program reads an integer from the user, computes its square using the Square function, and prints the result.`,
         code: `
 -- main.adb
-- Main procedure that uses the Square package

with Ada.Text_IO; use Ada.Text_IO;
with Square; -- Importing the Square package

procedure Main is

   -- Variables
   Number  : Integer;
   Result  : Integer;

begin
   -- Get user input
   Put_Line ("Enter a non-negative integer: ");
   Get (Number);

   -- Check precondition
   if Number >= 0 then
      Result := Square.Square (Number);
      Put_Line ("The square of " & Integer'Image(Number) & " is " & Integer'Image(Result));
   else
      Put_Line ("Error: Input must be non-negative.");
   end if;

end Main;
`,
      },
      {
         heading: "Formal Verification with GNATprove",
         text: `GNATprove is used to formally verify the correctness of the program. 
               It checks the preconditions and postconditions, ensuring no run-time errors, such as overflow or postcondition violations, occur.`,
         code: ``,
      },
      {
         heading: "Examine All in GNAT Studio",
         text: `The "Examine All" feature in GNAT Studio performs an initial analysis of the SPARK program to identify potential issues without fully proving the code. It checks for the presence of contracts, checks for obvious errors, and provides a quick overview of what needs to be proved.`,
         code: ``,
         image: examine,
      },

      {
         heading: "Build and Run in GNAT Studio",
         text: `The "Build and Run" feature compiles the project and runs the main program. In this case, after the square function has been proven to be correct, the project can be built and run to see the function in action. This step involves the usual compilation process followed by program execution.`,
         code: ``,
         image: buildRun
      },
      {
         heading: "Prove All in GNAT Studio",
         text: `The "Prove All" option is used to verify all SPARK subprograms and packages in the project. It runs GNATprove across the entire project, ensuring that all parts of the code meet the specified contracts and are free of runtime errors. This is especially useful for large projects where multiple components interact.`,
         code: ``,
         image: proveAll,
      },
      {
         heading: "Conclusion",
         text: `This SPARK Ada program demonstrates the use of formal methods to ensure the correctness of a function that computes the square of a non-negative integer. 
               Through preconditions, postconditions, and formal verification with GNATprove, we can guarantee the absence of run-time errors and handle edge cases like integer overflow.`,
         code: ``,
      },
   ],
};
