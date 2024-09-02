import React from "react";
import ReactDOM from "react-dom"
import Card from "./CARD"
import contacts from "../contacts";  
function App() {
  return (
    <div>
    <Card nname={contacts[0].name} photo={contacts[0].imgURL} no={contacts[0].phone} mail={contacts[0].email}  />
    <Card nname={contacts[1].name} photo={contacts[1].imgURL} no={contacts[1].phone} mail={contacts[1].email}  />
    <Card nname={contacts[2].name} photo={contacts[2].imgURL} no={contacts[2].phone} mail={contacts[2].email}  />
    </div>
  );
}

export default App;
