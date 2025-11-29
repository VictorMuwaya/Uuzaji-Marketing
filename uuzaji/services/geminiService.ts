import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

export const generateMarketingStrategy = async (
  businessName: string,
  industry: string,
  targetAudience: string
): Promise<string> => {

  // Access the key via the modern Vite standard
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    console.error("API Key is missing. If you are on Cloudflare, ensure 'API_KEY' is set in Settings > Environment Variables and you have REDEPLOYED.");
    throw new Error("Configuration Error: API Key not found. Please contact support.");
  }

  // Initialize the client with the key
  const ai = new GoogleGenAI({ apiKey }); 

  const prompt = `
    You are a senior marketing strategist for Uuzaji, a premier East African marketing agency.
    
    Client Details:
    - Business Name: ${businessName}
    - Industry: ${industry}
    - Target Audience: ${targetAudience} (Focus context: Uganda, Kenya, Tanzania, Rwanda)

    Task:
    Generate a high-impact, culturally resonant marketing strategy, tailor the strategy to the Client Details.
    
    Output Format:
    Use strictly formatted Markdown. Do not use JSON.
    
    Structure:
    ### 1. Brand Essence & Slogan
    - **English Slogan:** [Catchy & Professional]
    - **Swahili/Local Slang Twist:** [Culturally relevant & fun]
    
    ### 2. The Game Plan (3-Point Strategy)
    - **Digital Angle:** Specific platforms (e.g., WhatsApp, TikTok, Twitter) and content types suitable for East Africa.
    - **Ground Game:** A physical activation idea (e.g., Market storms, Pop-ups, Boda-boda branding).
    - **Loyalty Hook:** How to keep them coming back.

    ### 3. The Pan-African Twist
    - One unique idea that specifically leverages East African culture (music, food, habits, or holidays) to make this brand go viral.

    Tone: Professional, energetic, and knowledgeable about the region. Keep it concise.
  `;

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Disable thinking for faster response
      }
    });

    return response.text || "Sorry, I couldn't generate a strategy at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to generate strategy. Please try again later.");
  }
};
