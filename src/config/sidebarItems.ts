
interface SidebarItem {
    name: string;
    path?: string;
    subItems?: SidebarItem[];
}

export const sidebarItems: SidebarItem[] = [
    { name: 'Dashboard', path: '/' },
    { name: 'Courses', path: '/courses' },
    {
        name: '+ Introduction to Ada',
        subItems: [
            { name: 'If/Then/Else', path: '/introduction-ada/if-then-else' },
            { name: 'Case', path: '/introduction-ada/case' },
            { name: 'Conditional', path: '/introduction-ada/conditional' },
            { name: 'Declarative', path: '/introduction-ada/declarative' },
        ],
    },
    {
        name: '+ Introduction to SPARK Ada',
        subItems: [
            { name: 'Overview', path: '/introduction-spark-ada/overview' },
            { name: 'Flow Analysis', path: '/introduction-spark-ada/flow-analysis' },
            { name: 'Proof of Program Integrity', path: '/introduction-spark-ada/proof-of-program-integrity' },
        ],
    },
    { name: 'Run Ada Code', path: '/run-ada-code' },
    { name: 'Run SPARK Ada Code', path: '/spark-ada-basics' },
];
