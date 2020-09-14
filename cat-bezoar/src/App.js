import React, { useState, useEffect } from 'react';
import axios from "axios";
import FactCard from "./components/FactCard.js";
import './App.css';

function App() {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [_id, setID] = useState(Number);

  useEffect(() => {
    axios.get(`https://cat-fact.herokuapp.com/facts`)
    .then(response => {
      // can access each individual object by index
      console.log("RESPONSE.data.all",response.data.all)
    })
    .catch(error => console.log(error));
  }, []);


  return (
    <div className="App">
      <h1>CatBezoar</h1>
    </div>
  );
}

export default App;
