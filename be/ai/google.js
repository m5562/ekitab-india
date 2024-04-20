import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key as an environment variable (see "Set up your API key" above)
// console.log(process.env.);
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function magix(prompt) {
  // For text-only input, use the gemini-pro model
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return(text);
}

export {magix};
