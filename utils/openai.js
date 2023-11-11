export const TEXT_MODEL = "gpt-4";
export const IMAGE_MODEL = "dall-e-3";

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
export default openai;