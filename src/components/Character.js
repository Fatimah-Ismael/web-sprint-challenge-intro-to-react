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
            <h3>name: {props.data.name}</h3>
            <p>birth year: {props.data.birth_year} </p>   
        </div>
    )
       
  };
  
  
  export default Character;

