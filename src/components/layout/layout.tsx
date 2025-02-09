// src/components/Layout.tsx
import React from "react";
import Logo from "../common/logo";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-background min-h-screen flex flex-col'>
            {" "}
            {/* Base styles */}
            <header className='p-4 border-b'>
                {" "}
                {/* Header */}
                <div className='container mx-auto flex items-center justify-between'>
                    <Logo className='h-8 w-auto' />{" "}
                    {/* Use the Logo component */}
                    <nav>{/* Your navigation links */}</nav>
                </div>
            </header>
            <main className='container mx-auto flex-1 p-4'>
                {" "}
                {/* Main content area */}
                {children}
            </main>
            <footer className='p-4 text-center border-t'>
                {" "}
                {/* Footer */}
                {/* Your footer content */}
            </footer>
        </div>
    );
};

export default Layout;
