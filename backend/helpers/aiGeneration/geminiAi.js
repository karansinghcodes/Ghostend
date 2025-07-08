import { configs } from "../../config/config.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { GoogleGenAI } from "@google/genai";
import fs from "node:fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: configs.geminiApiKey });

//The ES modules that use the import and export syntax do not have access to __dirname or __filename by default to fix this we use : 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//prompt path
const filePath = path.resolve(__dirname, "../../prompt/dataGeneration.txt");

export const generateWithAi = async (userMessage) => {
  try {
    const rules = fs.readFileSync(filePath, {
      encoding: "utf-8",
    });

    const prompt = rules + userMessage;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    const data = JSON.parse(response.text);

    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error("Failed to retrieve data from Gemeini Api",error.message);
  }
};

