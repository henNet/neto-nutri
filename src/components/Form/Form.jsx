"use client";
import { useState } from "react";
import "./Form.css";

export default function Form({ getDietFromGoogle }) {
  const [response, setResponse] = useState("");

  function handleGetDiet(formData) {
    console.log(formData.get("name"));
    console.log(formData.get("weight"));

    const responseFromApi = getDietFromGoogle();

    setResponse(responseFromApi);
  }

  return (
    <div>
      <div className="form-container">
        <form action={handleGetDiet}>
          Nome: <input type="text" name="name" />
          Peso: <input type="number" name="weight" />
          <input type="submit" value="Gerar dieta" />
        </form>
      </div>

      <div className="response-container">
        <p>Resposta:</p>
        <p>{response}</p>
      </div>
    </div>
  );
}
