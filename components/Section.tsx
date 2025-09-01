
import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
    return (
        <section className="bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700 h-full">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-500 pb-2">{title}</h2>
            <div className="prose prose-invert max-w-none">
                {children}
            </div>
        </section>
    );
};

export default Section;
