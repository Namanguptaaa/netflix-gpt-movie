// src/lib/groq.js
import Groq from "groq-sdk";
import { GROQAI } from "./Constent";

const groq = new Groq({
  apiKey: GROQAI,
  dangerouslyAllowBrowser: true, // required for client-side usage
});


export default groq;