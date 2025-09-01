import React from 'react';

// Icons are defined here using React.createElement to be valid in a .ts file
const PizzaIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6L14.6 7.2A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" }));
const ObstacleIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" }));
const PowerUpIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M13 10V3L4 14h7v7l9-11h-7z" }));
const MovementIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M13 7l5 5m0 0l-5 5m5-5H6" }));
const ScoreIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" }));
const BoostIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M5 10l7-7m0 0l7 7m-7-7v18" }));
const ControlsIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" }));
const MinimalIcon = () => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 text-red-400", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLineCap: "round", strokeLineJoin: "round", strokeWidth: 2, d: "M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" }));

export const GAME_CONCEPT = "An endless runner mobile game where the player controls a stylish young man in a vibrant red outfit, collecting various food items instead of coins, while dodging obstacles in a lively urban city environment.";

export const CHARACTER_DETAILS = [
    "Energetic young male, athletic and playful.",
    "Wears a full bright red sporty outfit (hoodie, track pants).",
    "Red cap worn backward or a red headband.",
    "Cartoonish attractive face with big expressive eyes.",
    "Small backpack with food graphics."
];

export const ENVIRONMENT_DETAILS = [
    "Colorful urban city streets.",
    "Filled with restaurants, food trucks, and neon signs.",
    "Wide roads with train tracks and food stalls.",
    "Animated billboards featuring food items.",
    "Bright daytime lighting with soft shadows.",
    "Dynamic motion blur to emphasize speed."
];

export const ART_STYLE_DETAILS = {
    description: "The visual aesthetic is similar to popular games like Subway Surfers or Talking Tom Hero Dash.",
    points: [
        "High-quality 3D cartoon graphics.",
        "Bright, vibrant, and glossy textures.",
        "Smooth and soft shading.",
        "Modern, playful overall design."
    ]
};

interface IconCardData {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const GAMEPLAY_ELEMENTS: IconCardData[] = [
    { icon: React.createElement(PizzaIcon), title: "Food Collection", description: "Collect pizza, burgers, fries instead of coins." },
    { icon: React.createElement(ObstacleIcon), title: "Obstacles", description: "Dodge crates, shopping carts, traffic signs." },
    { icon: React.createElement(MovementIcon), title: "Movements", description: "Run, jump, double jump, slide, swipe." },
    { icon: React.createElement(PowerUpIcon), title: "Power-ups", description: "Food magnet, speed boost, protective shield." },
];

export const UI_UX_ELEMENTS: IconCardData[] = [
     { icon: React.createElement(ScoreIcon), title: "Food Score", description: "Score counter uses food icons, not numbers." },
     { icon: React.createElement(BoostIcon), title: "Boost Bar", description: "Fills up when collecting special food items." },
     { icon: React.createElement(ControlsIcon), title: "Clear Controls", description: "Big, clear buttons on both sides of the screen." },
     { icon: React.createElement(MinimalIcon), title: "Minimal UI", description: "Playful, colorful interface with minimal clutter." }
];

export const FULL_PROMPT_CONTEXT = `
General Concept: An endless runner mobile game where the player controls a stylish young man in a vibrant red outfit, collecting various food items instead of coins, while dodging obstacles in a lively urban city environment.

Main Character Design:
- Energetic young male, athletic and playful.
- Wears a full bright red sporty outfit (red hoodie, red track pants with white side stripes, white/black sneakers).
- Red cap (worn backward) or red headband.
- Cartoonish attractive face with big expressive eyes and a cheerful smile.
- Small backpack with food graphics.

Environment:
- Colorful urban city streets filled with restaurants, food trucks, and neon signs.
- Wide roads with train tracks, food stalls, and animated billboards featuring burgers, pizza, and fried chicken.
- Bright daytime lighting with soft shadows and slight reflections.
- Dynamic motion blur in the background to emphasize speed.

Gameplay Elements:
- Player collects food items instead of coins: pizza slices, burgers, sandwiches, fried chicken, tacos, fries.
- Obstacles: crates, shopping carts, traffic signs, food delivery bikes.
- Movements: run, jump, double jump, slide, swipe left/right.
- Power-ups: food magnet, speed boost, protective food shield.

UI/UX Design:
- Score counter uses food icons instead of numbers.
- Boost bar that fills up when collecting special food.
- Big, clear control buttons on both sides of the screen.
- Playful, colorful interface with minimal clutter.

Art Style:
- High-quality 3D cartoon graphics.
- Bright, vibrant, and glossy textures.
- Smooth and soft shading with modern, playful design.
- Similar aesthetic to Subway Surfers or Talking Tom Hero Dash.
`;