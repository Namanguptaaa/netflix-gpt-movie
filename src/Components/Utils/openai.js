import OpenAI from 'openai';
import { OPENAI } from './Constent';

const openai = new OpenAI({
  apiKey: OPENAI, // This is the default and can be comitted
  dangerouslyAllowBrowser: true,

});

export default openai;