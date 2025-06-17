import Form from "@/components/Form/Form";
import { GoogleGenAI } from "@google/genai";

export default async function Home() {
  async function getDiet(data) {
    "use server";
    const ai = new GoogleGenAI({ apiKey: process.env.API });
    const prompt = `Crie uma dieta para uma pessoa com os parâmetros: nome ${data.name},
    34 anos, ${data.weight}Kg, 1,72m. Me forneça um json estruturado com os paramêtros
    fornecidos e com poucas refeições. O Json fornecido deve ser no formato:
    {name, age, weight, meals}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });
    console.log(response.text);
    return response.text;
  }

  return (
    <div>
      <Form getDietFromGoogle={getDiet} />
    </div>
  );
}
