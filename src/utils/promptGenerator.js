import { GoogleGenerativeAI } from "@google/generative-ai";

export const generatePrompt = async (data) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    throw new Error("Gemini API Key is missing. Please set VITE_GEMINI_API_KEY in your .env file.");
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  const {
    app_description = '',
    target_user = '',
    problem = '',
    features = '',
    tech_stack = '',
    constraints = '',
    user_level = '',
    output_type = '',
    build_style = '',
    design_style = '',
    animation_level = ''
  } = data;

  const systemInstruction = `
    ACT AS A SENIOR AI PRODUCT ARCHITECT & SENIOR SOFTWARE ENGINEER.
    Your task is to take the following user inputs and generate a HIGH-FIDELITY, STRUCTURED prompt system for AI coding tools like Cursor or Bolt.
    
    The output MUST follow this strict format:
    A. PROJECT UNDERSTANDING (Name, Users, Problem, Goal)
    B. PRODUCT STRATEGY (Key Features, MVP Scope)
    C. TECHNICAL APPROACH (Tech Stack, Architecture)
    D. DESIGN DIRECTION (UI Style, Layout, Motion)
    E. STEP-BY-STEP PROMPT PLAN (Prompt 1 to 4)
    F. FINAL MASTER PROMPTS (Clean & Modular)
    
    User Inputs:
    - Description: ${app_description}
    - Target User: ${target_user}
    - Problem: ${problem}
    - Features: ${features}
    - Tech Stack: ${tech_stack}
    - Constraints: ${constraints}
    - User Level: ${user_level}
    - Output Type: ${output_type}
    - Build Style: ${build_style}
    - Design Style: ${design_style}
    - Animation: ${animation_level}
  `;

  console.log("🚀 SENDING PROMPT TO GEMINI:", systemInstruction);

  try {
    const result = await model.generateContent(systemInstruction);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to refine prompt with Gemini. Please check your API key and network.");
  }
};
