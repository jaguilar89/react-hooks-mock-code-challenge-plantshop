import React, { useState } from "react";

function NewPlantForm({ plantData, setPlantData, onAddPlant }) {
  const [plantName, setPlantName] = useState("");
  const [plantImg, setPlantImg] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: plantName,
        image: plantImg,
        price: Number(plantPrice)
      })
    })
      .then((res) => res.json())
      .then((newPlant) => onAddPlant(newPlant))
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={(e) => setPlantName(e.target.value)} />
        <input type="text" name="image" placeholder="Image URL" onChange={(e) => setPlantImg(e.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={(e) => setPlantPrice(e.target.value)} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default NewPlantForm;
