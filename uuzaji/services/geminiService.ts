import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (
  businessName: string,
  industry: string,
  targetAudience: string
): Promise<string> => {

  const prompt = `
    Act as a senior marketing strategist for Uuzaji, a top East African marketing firm.
    
    A client has approached us with the following details:
    - Business Name: ${businessName}
    - Industry: ${industry}
    - Target Audience: ${targetAudience} (focus on East African context: Uganda, Kenya, Tanzania, Rwanda)

    Please provide a concise but high-impact marketing strategy response in JSON format (but return it as plain text for me to parse or just formatted markdown text). 
    
    The response should include:
    1. A catchy Slogan (English & Swahili option).
    2. A 3-point strategy focusing on digital and local activation.
    3. A specific "Pan-African Twist" idea to make the brand stand out culturally.

    Keep the tone professional, energetic, and culturally relevant to East Africa.
    Format the output using Markdown.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response on simple tasks
      }
    });

    return response.text || "Sorry, I couldn't generate a strategy at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate strategy. Please try again later.");
  }
};