
import React, { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import IconCard from './components/IconCard';
import Generator from './components/Generator';
import { GAME_CONCEPT, CHARACTER_DETAILS, ENVIRONMENT_DETAILS, GAMEPLAY_ELEMENTS, UI_UX_ELEMENTS, ART_STYLE_DETAILS } from './constants';
import type { GenerationType, AiTool } from './types';

const App: React.FC = () => {
    const [generatedPrompt, setGeneratedPrompt] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-slate-900 text-gray-200">
            <Header />
            <main className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {/* Column 1 */}
                    <div className="flex flex-col gap-8">
                        <Section title="General Concept">
                            <p className="text-gray-400">{GAME_CONCEPT}</p>
                        </Section>

                        <Section title="Character Design">
                            <img src="https://picsum.photos/seed/gamerboy/600/400" alt="Character Concept Art" className="rounded-lg mb-4 w-full h-48 object-cover" />
                            <ul className="space-y-2 list-disc list-inside text-gray-400">
                                {CHARACTER_DETAILS.map((detail, index) => <li key={index}>{detail}</li>)}
                            </ul>
                        </Section>
                        
                        <Section title="Art Style">
                             <img src="https://picsum.photos/seed/gamestyle/600/400" alt="Game Art Style" className="rounded-lg mb-4 w-full h-48 object-cover" />
                            <p className="text-gray-400 mb-2">{ART_STYLE_DETAILS.description}</p>
                            <ul className="space-y-2 list-disc list-inside text-gray-400">
                                {ART_STYLE_DETAILS.points.map((point, index) => <li key={index}>{point}</li>)}
                            </ul>
                        </Section>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-8">
                        <Section title="Environment">
                             <img src="https://picsum.photos/seed/cityscape/600/400" alt="Game Environment" className="rounded-lg mb-4 w-full h-48 object-cover" />
                            <ul className="space-y-2 list-disc list-inside text-gray-400">
                                 {ENVIRONMENT_DETAILS.map((detail, index) => <li key={index}>{detail}</li>)}
                            </ul>
                        </Section>

                        <Section title="Gameplay Elements">
                            <div className="grid grid-cols-2 gap-4">
                                {GAMEPLAY_ELEMENTS.map((item, index) => (
                                    <IconCard key={index} icon={item.icon} title={item.title} description={item.description} />
                                ))}
                            </div>
                        </Section>
                        <Section title="UI/UX Design">
                           <div className="grid grid-cols-2 gap-4">
                                {UI_UX_ELEMENTS.map((item, index) => (
                                     <IconCard key={index} icon={item.icon} title={item.title} description={item.description} />
                                ))}
                            </div>
                        </Section>
                    </div>

                    {/* Column 3 */}
                    <div className="lg:col-span-1 md:col-span-2">
                        <Generator 
                            setGeneratedPrompt={setGeneratedPrompt} 
                            setIsLoading={setIsLoading}
                            setError={setError}
                            isLoading={isLoading}
                            generatedPrompt={generatedPrompt}
                            error={error}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
