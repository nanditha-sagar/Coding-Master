import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GENAI_API_KEY || "AIzaSyDna3iYPBfh8ybn-sPI0HzEf1E6_fcGmNw" });

async function main() {
  try {
    const pager = await ai.models.list();
    const all = [];
    for await (const model of pager) {
      all.push(model);
    }
    console.log(JSON.stringify(all, null, 2));
  } catch (err) {
    console.error('Error listing models:', err);
  }
}

main();
