import { FaTachometerAlt, FaBook, FaTerminal, FaPlay } from 'react-icons/fa';
import { MdOutlineCode, MdLibraryBooks } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

interface SidebarItem {
    name: string;
    path?: string;
    subItems?: SidebarItem[];
    icon?: React.ComponentType; // Add an icon field
}

export const sidebarItems: SidebarItem[] = [
    { name: 'Dashboard', path: '/', icon: FaTachometerAlt },
    { name: 'Courses', path: '/courses', icon: FaBook },
    { name: 'GNAT installation', path: '/gnat-studio-guide', icon: IoMdSettings },
    {
        name: '+ Introduction to Ada',
        icon: MdOutlineCode,
        subItems: [
            { name: 'If/Then/Else', path: '/introduction-ada/if-then-else' },
            { name: 'Case', path: '/introduction-ada/case' },
            { name: 'Conditional', path: '/introduction-ada/conditional' },
            { name: 'Declarative', path: '/introduction-ada/declarative' },
        ],
    },
    {
        name: '+ Introduction to SPARK Ada',
        icon: MdLibraryBooks,
        subItems: [
            { name: 'Overview', path: '/introduction-spark-ada/overview' },
            { name: 'Flow Analysis', path: '/introduction-spark-ada/flow-analysis' },
            { name: 'Proof of Program Integrity', path: '/introduction-spark-ada/proof-of-program-integrity' },
        ],
    },
    { name: 'Run Ada Code', path: '/run-ada-code', icon: FaTerminal },
    { name: 'Run SPARK Ada Code', path: '/spark-ada-basics', icon: FaPlay },
];
