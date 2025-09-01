
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-slate-800 shadow-lg">
            <div className="container mx-auto px-4 py-5">
                <h1 className="text-3xl font-bold text-white tracking-wider">
                    <span className="text-red-500">Food Runner</span> Game Concept
                </h1>
                <p className="text-gray-400 mt-1">An Interactive Creative Brief & Prompt Generator</p>
            </div>
        </header>
    );
};

export default Header;
