// Write your Character component here
import React, { useState }from "react"
import { data } from "../mocks/handlers"

const dummyData= [
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
    
]

const Character = (props) => {

    return (
        <div className="character-name-wrapper"> 
            <h3>name: Luke Skywalker</h3>
            <p>birth year: 19BBY </p>
            <h3>name: C-3PO</h3>
            <p>birth year: 112BBY </p>
            <h3>name: R2-D2</h3>
            <p>birth year: 33BBY </p>
            <h3>name: Darth Vader</h3>
            <p>birth year: 41.9BBY </p>
        </div>
    )
       
  };
  
  
  export default Character;

