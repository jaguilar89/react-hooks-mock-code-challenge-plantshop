import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantData, setPlantData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((plants) => setPlantData(plants))
  }, []);

function addNewPlant(newPlant) {
  setPlantData([...plantData, newPlant])
};

 const plantsToDisplay = plantData.filter((plant) => {
  return plant.name.toLowerCase().includes(search.toLowerCase())
 })

  return (
    <main>
      <NewPlantForm 
        plantData={plantData} 
        setPlantData={setPlantData}
        onAddPlant={addNewPlant}
      />
      <Search setSearch={setSearch} />
      <PlantList plants={plantsToDisplay} />
    </main>
  );
};

export default PlantPage;
