import { FaTerminal, FaPlay } from 'react-icons/fa';
import { MdOutlineCode, MdLibraryBooks } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';
import { FaFileAlt } from 'react-icons/fa';
interface SidebarItem {
    name: string;
    path?: string;
    subItems?: SidebarItem[];
    icon?: React.ComponentType; // Add an icon field
}

export const sidebarItems: SidebarItem[] = [
    { name: 'GNAT installation', path: '/gnat-studio-guide', icon: IoMdSettings },
    { name: 'GNAT Prog Execution', path: '/gnat-studio-exe-guide', icon: FaFileAlt },

    {
        name: '+ Introduction to Ada',
        icon: MdOutlineCode,
        subItems: [
            { name: 'Imperative language', path: '/introduction-ada/imperative' },
        ],
    },
    {
        name: '+ Introduction to SPARK Ada',
        icon: MdLibraryBooks,
        subItems: [
            { name: 'Overview', path: '/introduction-spark-ada/overview' },
            { name: 'Flow Analysis', path: '/introduction-spark-ada/flow-analysis' },
        ],
    },
    { name: 'Ada Playground', path: '/run-ada-code', icon: FaTerminal },
    { name: 'SPARK Ada Playground', path: '/spark-ada-basics', icon: FaPlay },
];
