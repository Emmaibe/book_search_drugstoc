import * as React from "react";

export const Header: React.FC = () => {
    return (
        <header className="fixed top-0 flex-between p-4 w-full bg-primary-100 bg-opacity-80 backdrop-filter backdrop-blur-md">
            <div className="text-3xl matemasie font-medium">BookSTOC.</div>
        </header>
    );
};