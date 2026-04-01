import { GoogleGenerativeAI } from "@google/generative-ai";

async function test() {
    const apiKey = "DUMMY_KEY"; // Placeholder
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
        console.log("Attempting to call Gemini API with dummy key...");
        const result = await model.generateContent("Hello");
        console.log("Success (unexpected):", result.response.text());
    } catch (error) {
        if (error.message.includes("API_KEY_INVALID") || error.message.includes("401")) {
            console.log("Integration Check: Passed (API key is invalid, but SDK is working correctly).");
        } else {
            console.error("Integration Check: Failed (Unexpected error):", error.message);
        }
    }
}

test();
