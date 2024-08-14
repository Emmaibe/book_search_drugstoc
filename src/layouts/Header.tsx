import * as React from "react";

export const Header: React.FC = () => {
    return (
        <header className="fixed z-50 top-0 flex-between p-4 w-full bg-black bg-opacity-80 backdrop-filter backdrop-blur-md">
            <div className="text-3xl matemasie font-medium text-primary-50">BookSTOC.</div>
        </header>
    );
};