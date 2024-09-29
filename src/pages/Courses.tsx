import React from 'react';

// Define the course structure as a type
type CourseSection = {
    title: string;
    subsections?: CourseSection[];
};

// Course structure data
const courseStructure: CourseSection[] = [

    {
        title: 'GNAT Installation',
    },
    {
        title: 'GNAT Program Execution',
    },
    {
        title: 'Introduction to Ada',
        subsections: [
            {
                title: 'Imperative Language',
                subsections: [
                    { title: 'Hello Learn SPARK Ada!' },
                    { title: 'If/Then/Else' },
                    { title: 'For loops' },
                    { title: 'For loops with range' },
                    { title: 'Bare Loops' },
                    { title: 'Bare Loops' }

                ],
            },
        ],
    },
    {
        title: 'Introduction to SPARK Ada',
        subsections: [
            { title: 'Overview' },
            {
                title: 'Flow Analysis',
                subsections: [
                    { title: 'Uninitialized Variables' },
                    { title: 'Ineffective Statements' },
                    { title: 'Incorrect Parameter Mode' },
                    { title: 'Global Contracts' },
                    { title: 'Depends Contracts' },

                ]
            },
        ],
    },
    {
        title: 'Ada Playground',
    },
    {
        title: 'SPARK Ada Playground',
    },
];

// Functional component to display the course structure
const Courses: React.FC = () => {
    // Function to render the course sections and subsections recursively
    const renderCourseSection = (section: CourseSection, level = 0) => (
        <div key={section?.title} className={`ml-${level * 4} my-2`}>
            <div
                className={`text-${level === 0 ? 'xl' : 'lg'} font-${level === 0 ? 'bold' : 'normal'
                    } text-blue-${level === 0 ? '700' : '600'}`}
            >
                {section?.title}
            </div>
            {section?.subsections &&
                section?.subsections?.map((sub) => renderCourseSection(sub, level + 1))}
        </div>
    );

    return (
        <div className="p-8 bg-white rounded-lg shadow-lg max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Course Structure
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Examine the courses and lessons offered in this educational bundle. Each section aims to instruct you on the principles of SPARK Ada, progressing to more sophisticated subjects in verified software development.
            </p>
            {courseStructure.map((section) => renderCourseSection(section))}
        </div>
    );
};

export default Courses;
