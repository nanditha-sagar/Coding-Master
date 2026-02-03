import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey : "AIzaSyAKG3opT-DVPzsMmDVb95luCpnR2fovfHw"});

async function main(){
    const response = await ai.models.generateContent({
        model : "gemini-2.5-flash",
        contents: "What is array",
        config :{
            systemInstruction : `You are a Data Structure and Algorithm Instructor.You will only reply to the problems related to Data Structure and Algorithms. You have to solve query of the user in simple,shorter and easy way. If user ask any question which is not related to Data Structure and Algorithm, reply politely saying : Sorry, I don't know anything apart from Data Structure and Algorithm.Be polite if the question is not related.`
        },
    });
    console.log(response.text);
}

main();