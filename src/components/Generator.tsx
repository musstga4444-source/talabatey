import React, { useState, useCallback } from 'react';
import type { GenerationType, AiTool } from '../types';
import { generateCreativePrompt } from '../services/geminiService';

interface GeneratorProps {
    setGeneratedPrompt: React.Dispatch<React.SetStateAction<string>>;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
    isLoading: boolean;
    generatedPrompt: string;
    error: string | null;
}

const RadioPill = <T extends string,>({ id, name, value, label, checked, onChange }: { id: string; name: string; value: T; label: string; checked: boolean; onChange: (value: T) => void; }) => (
    <div>
        <input type="radio" id={id} name={name} value={value} className="hidden peer" checked={checked} onChange={() => onChange(value)} />
        <label htmlFor={id} className="inline-block w-full text-center px-4 py-2 rounded-lg cursor-pointer text-sm font-semibold border-2 border-slate-600 bg-slate-800 text-gray-300 peer-checked:bg-red-600 peer-checked:border-red-500 peer-checked:text-white transition-colors duration-200">
            {label}
        </label>
    </div>
);


const Generator: React.FC<GeneratorProps> = ({ setGeneratedPrompt, setIsLoading, setError, isLoading, generatedPrompt, error }) => {
    const [generationType, setGenerationType] = useState<GenerationType>('screenshot');
    const [aiTool, setAiTool] = useState<AiTool>('MidJourney');

    const handleGenerate = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        setGeneratedPrompt('');
        try {
            const prompt = await generateCreativePrompt(generationType, aiTool);
            setGeneratedPrompt(prompt);
        } catch (err: any) {
            setError(err.message || 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    }, [generationType, aiTool, setIsLoading, setError, setGeneratedPrompt]);

    return (
        <div className="bg-slate-800/50 p-6 rounded-xl shadow-md border border-slate-700 sticky top-8">
            <h2 className="text-2xl font-semibold text-white mb-4 border-b-2 border-red-500 pb-2">Prompt Generator</h2>
            
            <div className="space-y-6">
                <div>
                    <h3 className="font-semibold mb-3 text-gray-300">1. Choose Asset Type</h3>
                    <div className="grid grid-cols-1 gap-2">
                       {/* FIX: Wrapped state setter in a lambda to resolve TypeScript variance issue. */}
                       <RadioPill id="type-char" name="generationType" value="character" label="Character Design" checked={generationType === 'character'} onChange={(v) => setGenerationType(v)} />
                       <RadioPill id="type-screen" name="generationType" value="screenshot" label="Gameplay Screenshot" checked={generationType === 'screenshot'} onChange={(v) => setGenerationType(v)} />
                       <RadioPill id="type-pack" name="generationType" value="asset_pack" label="Complete Asset Pack" checked={generationType === 'asset_pack'} onChange={(v) => setGenerationType(v)} />
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-3 text-gray-300">2. Choose AI Tool</h3>
                    <div className="grid grid-cols-3 gap-2">
                       {/* FIX: Wrapped state setter in a lambda to resolve TypeScript variance issue. */}
                       <RadioPill id="tool-mj" name="aiTool" value="MidJourney" label="MidJourney" checked={aiTool === 'MidJourney'} onChange={(v) => setAiTool(v)} />
                       <RadioPill id="tool-dalle" name="aiTool" value="DALL-E 3" label="DALL-E 3" checked={aiTool === 'DALL-E 3'} onChange={(v) => setAiTool(v)} />
                       <RadioPill id="tool-sd" name="aiTool" value="Stable Diffusion" label="Stable Diffusion" checked={aiTool === 'Stable Diffusion'} onChange={(v) => setAiTool(v)} />
                    </div>
                </div>

                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-200 disabled:bg-slate-600 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                    {isLoading ? (
                        <>
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Generating...</span>
                        </>
                    ) : (
                        <span>Generate Prompt</span>
                    )}
                </button>

                {(generatedPrompt || error) && (
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2 text-gray-300">Generated Prompt:</h3>
                        {error && <p className="text-red-400 bg-red-900/50 p-3 rounded-lg">{error}</p>}
                        {generatedPrompt && (
                             <pre className="bg-slate-900 p-4 rounded-lg text-gray-300 text-sm whitespace-pre-wrap font-mono break-words leading-relaxed">{generatedPrompt}</pre>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Generator;