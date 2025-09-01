
import { GoogleGenAI } from "@google/genai";
import type { GenerationType, AiTool } from '../types';
import { FULL_PROMPT_CONTEXT } from '../constants';

if (!process.env.API_KEY) {
    // In a real app, you'd want to handle this more gracefully.
    // For this context, we'll throw an error to make it clear the key is missing.
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const getGenerationGoal = (type: GenerationType): string => {
    switch(type) {
        case 'character':
            return "Create a detailed character sheet with the character in multiple poses (front, side, running).";
        case 'screenshot':
            return "Create a dynamic, action-packed gameplay screenshot.";
        case 'asset_pack':
            return "Create a concept for a complete asset pack, including the character, environment elements, food items, and UI icons.";
        default:
            return "Create a visual asset.";
    }
}

export const generateCreativePrompt = async (
    generationType: GenerationType,
    aiTool: AiTool
): Promise<string> => {
    const generationGoal = getGenerationGoal(generationType);
    
    const prompt = `
    You are an expert creative director and prompt engineer for AI image generation. 
    Your task is to generate a detailed, high-quality prompt for the AI tool "${aiTool}" based on the provided game concept.
    The goal is to: ${generationGoal}

    **Game Concept Brief:**
    ${FULL_PROMPT_CONTEXT}

    ---

    Now, generate the final, ready-to-use prompt for ${aiTool}. The prompt should be a single block of text. 
    Incorporate specific details from the brief to ensure the generated image is faithful to the concept. 
    Emphasize the art style (Subway Surfers, 3D cartoon, vibrant, glossy). 
    Be descriptive and use powerful keywords that ${aiTool} understands well. 
    Do not add any commentary or explanation outside of the prompt itself. Just provide the raw prompt text.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });
        
        // Directly return the text from the response
        return response.text.trim();

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            return Promise.reject(new Error(`Failed to generate prompt: ${error.message}`));
        }
        return Promise.reject(new Error("An unknown error occurred while communicating with the Gemini API."));
    }
};
