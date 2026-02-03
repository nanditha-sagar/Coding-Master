import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'

const ai = new GoogleGenAI({apiKey : "AIzaSyDna3iYPBfh8ybn-sPI0HzEf1E6_fcGmNw"});

// const history = []
async function chat(userproblem) {
    history.push({
        role : 'user',
        parts : [{text:userproblem}]
    })
    
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents : history
  });

  history.push({
        role : 'model',
        parts : [{text:response.text}]
    })

  console.log(response.text);
}

async function main(){
    const userproblem = readlineSync.question("Ask me anything ----");
    await chat(userproblem);
    main();
}
main();