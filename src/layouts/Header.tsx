import * as React from "react";

export const Header: React.FC = () => {
    return (
        <header className="flex-between p-5">
            <div className="font-extrabold text-xl">BookSTOC.</div>
            <nav>
                <ul className="flex-between gap-5">
                    <li>About</li>
                    <li>Books</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};