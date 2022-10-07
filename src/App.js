import React, { useState, useEffect }from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components'
import "./App.css";
import { handlers , data } from './mocks/handlers';
import Character from './components/Character';

const dummyData= 
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
    }

function App() {
const [data, setData] = useState(dummyData);
/*
useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`)
  .then(res => {
    setData(res.data);
  }).catch(err => console.error(err))
}, [])
*/
return (
  <div className="App">
    <h1 className="Header">Characters</h1>
     <Character data={data}/>
     <Character data={data}/>
     
  </div>
);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
}
export default App;
