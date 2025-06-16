import Form from "@/components/Form/Form";
import { GoogleGenAI } from "@google/genai";

export default async function Home() {
  const ai = new GoogleGenAI({ apiKey: process.env.API });
  const prompt = `Crie uma dieta para uma pessoa de 34 anos, 80Kg e 1,72m?
    Me fornceca um texto pequeno com poucas refeições.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  console.log(response.text);

  return (
    <div>
      <Form />
    </div>
  );
}
