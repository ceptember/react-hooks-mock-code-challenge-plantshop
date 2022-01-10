import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [allPlants, setAllPlants] = useState([]); //All plants from server when component first loads
  const [plants, setPlants] = useState([]); //Filtered plants to show in list 
  
  useEffect(()=>{
    fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => {
        setAllPlants(data) //only touch allPlants the first time it loads
        setPlants(data)})
  }, [])

  function addPlant (newPlant){
    const updatedPlants =[...plants, newPlant]
    setPlants(updatedPlants)
  }

  function searchPlants (searchTerm){
    console.log('searching: '+searchTerm)
    const filteredPlants = allPlants.filter( (plant) => plant.name.toLowerCase().includes(searchTerm.toLowerCase()) )
    setPlants(filteredPlants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant ={addPlant}/>
      <Search onSearch={searchPlants}/>
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
