import download from '../assets/images/installation/download.png'
import confirm from '../assets/images/installation/confirmation.png'
export const gnat = {
    "title": "GNAT Studio Installation Guide",
    "steps": [
        {
            "step": 1,
            "title": "Install GNATprove",
            "description": "GNATprove needs to be installed to compile SPARK programs. Install GNATprove in the same location as GNAT Studio for compatibility. If installing in a different location, update the environment variable `GPR_PROJECT_PATH` as follows:",
        },
        {
            "step": 1.1,
            "title": "Updating Environment Variables",
            "description": "\n\nOn Windows, add the paths to\n\n`GPR_PROJECT_PATH` under Environment Variables: \n\n`<GNAT install dir>/lib/gnat`,\n\n`<GNAT install dir>/share/gpr`, and \n\n`<SPARK install dir>/lib/gnat`.\n\n On Linux/Mac, use:\n\n`export GPR_PROJECT_PATH=<GNAT install dir>/lib/gnat:<GNAT install dir>/share/gpr:<SPARK install dir>/lib/gnat:$GPR_PROJECT_PATH`\n\nOr for C shell:\n\n`setenv GPR_PROJECT_PATH <GNAT install dir>/lib/gnat:<GNAT install dir>/share/gpr:<SPARK install dir>/lib/gnat:$GPR_PROJECT_PATH`",
        },
        {
            "step": 2,
            "title": "Download GNAT Studio",
            "description": "Visit the [GNAT Studio official download page](https://www.adacore.com/download) and download the appropriate version for your operating system.",
            "image": download
        },
        {
            "step": 3,
            "title": "Install GNAT Studio",
            "description": "Run the installer and follow the on-screen instructions to install GNAT Studio.",
        },
        {
            "step": 4,
            "title": "Set Up Environment Variables",
            "description": "Ensure that GNAT Studio is added to your system's PATH. This allows you to run GNAT from the command line. Environment variables -> System variable -> entered_path/GNAT/year/bin",
            "image": confirm
        }
    ]
}