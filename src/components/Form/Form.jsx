"use client";
import "./Form.css";

export default function Form({ getDietFromGoogle }) {
  function handleGetDiet(formData) {
    console.log(formData.get("name"));
    console.log(formData.get("weight"));

    getDietFromGoogle();
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
        <p>Resposta</p>
      </div>
    </div>
  );
}
