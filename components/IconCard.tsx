
import React from 'react';

interface IconCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const IconCard: React.FC<IconCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-slate-700/40 p-4 rounded-lg flex items-start space-x-4 h-full">
            <div className="flex-shrink-0 mt-1">
                {icon}
            </div>
            <div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="text-sm text-gray-400">{description}</p>
            </div>
        </div>
    );
};

export default IconCard;
