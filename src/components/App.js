import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;


/*

App
  |---Header [static]
  |---PlantPage ****State: Filtered Plants, New Plant ****
      |---NewPlantForm **** SUBMIT HANDLER & PASS STATE UP TO PlantPage: I can add a new plant to the page by submitting the form***
      |---Search **** FILTER, Pass state to PlantPage*** 
      |---PlantList **** SIDE EFFECT ONCE ON LOAD: When the app starts, I can see all plants*****
          |---PlantCard **** STATE + CLICK HANDLER:  I can mark a plant as "sold out"****

Deliverables: 

x When the app starts, I can see all plants.
x I can add a new plant to the page by submitting the form.
x I can mark a plant as "sold out"
x I can search for plants by their name and see a filtered list of plants.

*/