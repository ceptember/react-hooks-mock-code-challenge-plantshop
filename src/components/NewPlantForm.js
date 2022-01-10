import React, {useState} from "react";

// picture of tree for testing 
// https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg


function NewPlantForm({onAddPlant}) {

  const [plantName, setPlantName] = useState("");
  const [plantImage, setPlantImage] = useState("");
  const [plantPrice, setPlantPrice] = useState("");

  function handleSubmit(event){
    event.preventDefault();
    const plantObj = {
      name: plantName,
      image: plantImage,
      price: plantPrice,
    }
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(plantObj)
    })
      .then(resp => resp.json())
      .then(addedPlant => onAddPlant(addedPlant))

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantName} onChange={(event)=>setPlantName(event.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={plantImage} onChange={(event)=> setPlantImage(event.target.value)} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantPrice} onChange={ (event) => setPlantPrice(event.target.value)}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
