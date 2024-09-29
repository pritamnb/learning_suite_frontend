
import React, { useState, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <Sidebar
                isOpen={isSidebarOpen}
                toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />

            {/* Main content area */}
            <div className="flex-1 flex flex-col">
                <Navbar isSidebarOpen={isSidebarOpen} />

                <main
                    className={`flex-grow pr-8 max-w-6xl bg-slate-200 mt-14 transition-all pl-10 duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'
                        }`}
                >
                    {children}
                </main>

                {/* <Footer /> */}
            </div>
        </div>
    );
};

export default Layout;
