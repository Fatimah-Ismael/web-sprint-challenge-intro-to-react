// Write your Character component here
import React, { useState, useEffect }from "react"
import { data } from "../mocks/handlers"
import axios from 'axios';

 function Character(props){
    const [starWars, setStarWars] = useState(data);
    
    

/*
useEffect(() => {
  axios.get(`https://swapi.dev/api/people/`)
  .then(res => {
   setData(res.data);
  }).catch(err => console.error(err))
}, [])

/*--------
insert under return 
<h2>Name: {starWars}</h2>
*/

return ( 
    <div className= 'character container'>
        {data.map(char =>
            <div className="characters" key={char.name}>
                {char.name}  Birth Year: {char.birth_year}
            </div>
                )}

    </div>
       
      )
}

    
  export default Character;

