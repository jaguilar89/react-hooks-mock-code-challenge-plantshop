import React, { useState } from "react";

function PlantCard({ plantInfo }) {
  const [isInStock, setIsInStock] = useState(true);

  function toggleInStock() {
    setIsInStock((isInStock) => !isInStock)
  };

  return (
    <li className="card">
      <img src={plantInfo.image} alt={plantInfo.name} />
      <h4>{plantInfo.name}</h4>
      <p>Price: {plantInfo.price}</p>
      {isInStock ? (
        <button className="primary" onClick={toggleInStock}>In Stock</button>
      ) : (
        <button onClick={toggleInStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
