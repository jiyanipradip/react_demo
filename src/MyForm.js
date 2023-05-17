import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );
  const [myCar, setMyCar] = useState("Volvo");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name} ${textarea}`);
  }
  const handleChange = (event) => {
    setTextarea(event.target.value)
    setMyCar(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <textarea value={textarea} onChange={handleChange} />
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
      <input type="submit" />
    </form>
  )
}
export default MyForm;