
import { GoogleGenAI, Type } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getStudyAdvice = async (userPrompt: string) => {
  if (!API_KEY) return "Vui lòng cấu hình API Key để trò chuyện cùng AI Mentor!";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "Bạn là 'Sứ Giả Xuân Học Tập', một mentor học đường thân thiện của Việt Nam. Bạn trả lời bằng tiếng Việt, phong cách tích cực, mang hơi thở không khí Tết. Bạn giúp học sinh lập kế hoạch học tập, giải đáp thắc mắc bài vở hoặc đưa ra những lời chúc Tết ý nghĩa liên quan đến học tập.",
      },
    });
    return response.text || "Xin lỗi, mình đang bận chuẩn bị bánh chưng, thử lại sau nhé!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Có lỗi xảy ra khi kết nối với AI Mentor. Hãy thử lại nhé!";
  }
};
