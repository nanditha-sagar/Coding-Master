import { GoogleGenAI } from "@google/genai";
import readlineSync from 'readline-sync'

const ai = new GoogleGenAI({apiKey : ""}); // write ur api key here 

const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history:[],
});


async function main(){

    const userproblem = readlineSync.question("Ask me Anything ---->  ");
    const res1 = await chat.sendMessage({
        message: userproblem,
    });

    console.log(res1.text);
    main();
}


main();