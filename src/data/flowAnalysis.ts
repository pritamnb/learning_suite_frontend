const flowAnalysisData = {
    "title": "",
    "sections": [
        {
            "subTitle": "Uninitialized Variables",
            "description": "We now present each class of errors detected by flow analysis. The first is the reading of an uninitialized variable. This is nearly always an error: it introduces non-determinism and breaks the type system because the value of an uninitialized variable may be outside the range of its subtype. For these reasons, SPARK requires every variable to be initialized before being read.\nFlow analysis is responsible for ensuring that SPARK code always fulfills this requirement.For example, in the function Max_Array shown below, we've neglected to initialize the value of Max prior to entering the loop. As a consequence, the value read by the condition of the if statement may be uninitialized. Flow analysis detects and reports this error.",
            "hint": "Initialize Max to natural value: Max: Natural := 2;",
            "files": [
                {
                    "name": "Show_uninitialized.ads",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage Show_Uninitialized is\n\ntype Array_Of_Naturals is array (Integer range <>) of Natural;\n\n   function Max_Array (A : Array_Of_Naturals) return Natural;\n\nend Show_Uninitialized;"
                },
                {
                    "name": "Show_uninitialized.adb",
                    "language": "ada",
                    "content": "package body Show_Uninitialized is\n\n   function Max_Array (A : Array_Of_Naturals) return Natural is\n\n      Max : Natural;\n\n   begin\n\n      for I in A'Range loop\n\n         if A (I) > Max then -- Here Max may not be initialized\n\n            Max := A (I);\n\n         end if;\n\n      end loop;\n\n      return Max;\n\n   end Max_Array;\n\nend Show_Uninitialized;"
                }
            ]
        },
        {
            "subTitle": "Ineffective Statements",
            "description": "Ineffective statements are executed but have no effect on any visible outputs. These can make the code less readable or indicative of errors.",
            "hint": "Check if your swap logic properly uses the temporary variable to hold one value while assigning the other. Make sure both `X` and `Y` are assigned using the temporary variable to complete the swap.\r\n Swap logic -> \n            Tmp := X;\n      X := Y;\n      Y := Tmp;",
            "files": [
                {
                    "name": "Show_Ineffective_Statements.ads",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage Show_Ineffective_Statements is\n   type T is new Integer;\n   procedure Swap1 (X, Y : in out T);\n   procedure Swap2 (X, Y : in out T);\nend Show_Ineffective_Statements;"
                },
                {
                    "name": "Show_Ineffective_Statements.adb",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage body Show_Ineffective_Statements is\n   procedure Swap1 (X, Y : in out T) is\n      Tmp : T;\n   begin\n      Tmp := X; -- This statement is ineffective\n      X := Y;\n      Y := X;\n   end Swap1;\n\n   Tmp : T := 0;\n   procedure Swap2 (X, Y : in out T) is\n      Temp : T := X; -- This variable is unused\n   begin\n      X := Y;\n      Y := Tmp;\n   end Swap2;\nend Show_Ineffective_Statements;"
                }
            ]
        },
        {
            "subTitle": "Incorrect Parameter Mode",
            "description": "Flow analysis ensures that parameter modes match their usage. Warnings are issued when input isn't read or output isn't modified, indicating potential errors.",
            "hint": "Make sure to use both `X` and `Y`'s initial values in the swap. Assign `X` to `Y` before updating `Y` to avoid overwriting its initial value.\r\n Replace with ->\n X := Y;\n Y := Tmp;",
            "files": [
                {
                    "name": "Show_Incorrect_Param_Mode.ads",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage Show_Incorrect_Param_Mode is\n   type T is new Integer;\n   procedure Swap (X, Y : in out T);\nend Show_Incorrect_Param_Mode;"
                },
                {
                    "name": "Show_Incorrect_Param_Mode.adb",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage body Show_Incorrect_Param_Mode is\n   procedure Swap (X, Y : in out T) is\n      Tmp : T := X;\n   begin\n      Y := X;   -- The initial value of Y is not used\n      X := Tmp; -- Y is computed to be an out parameter\n   end Swap;\nend Show_Incorrect_Param_Mode;"
                }
            ]
        },
        {
            "subTitle": "Global Contracts",
            "description": "Global contracts specify the set of global variables accessed or modified by a subprogram. Flow analysis ensures they are correct and complete.",
            "files": [
                {
                    "name": "Show_Global_Contracts.ads",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage Show_Global_Contracts is\n   X, Y, Z : Natural := 0;\n   procedure Set_X_To_Y_Plus_Z with Global => (Input => (Y, Z), Output => X);\n   procedure Set_X_To_X_Plus_Y with Global => (Input => Y, In_Out => X);\n   function Get_Value_Of_X return Natural with Global => X;\n   procedure Incr_Parameter_X (X : in out Natural) with Global => null;\nend Show_Global_Contracts;"
                }
            ]
        },
        {
            "subTitle": "Depends Contracts",
            "description": "Depends contracts specify the dependency relations between inputs and outputs of a subprogram. Flow analysis checks that these dependencies are correct and complete.",
            "files": [
                {
                    "name": "Show_Depends_Contracts.ads",
                    "language": "ada",
                    "content": "pragma SPARK_Mode(On);\npackage Show_Depends_Contracts is\n   type T is new Integer;\n   X, Y, Z : T := 0;\n   procedure Swap (X, Y : in out T) with Depends => (X => Y, Y => X);\n   function Get_Value_Of_X return T with Depends => (Get_Value_Of_X'Result => X);\n   procedure Set_X_To_Y_Plus_Z with Depends => (X => (Y, Z));\n   procedure Set_X_To_X_Plus_Y with Depends => (X =>+ Y);\n   procedure Do_Nothing (X : T) with Depends => (null => X);\n   procedure Set_X_To_Zero with Depends => (X => null);\nend Show_Depends_Contracts;"
                }
            ]
        }
    ]
}


export default flowAnalysisData;
