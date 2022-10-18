// Write your Character component here
import React, { useState, useEffect }from "react"
import { data } from "../mocks/handlers"
import axios from 'axios';

 function Character({ props }){
    const [starWars, setStarWars] = useState([]);

   /* useEffect(()=>{
    const url = 'https://swapi.dev/api/people/';

   const fetchData = async() => {
    try{
        const response = await fetch(url);
        const json =await response.json();
        console.log(data);
        setStarWars(data)
    } catch(error) {
        console.log('error', error);
    }
   };
   fetchData();
}, []);

    */
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
          //const element= document.querySelector()
          console.log(res.data);
         setStarWars(res.data);
        }).catch(err => console.error(err))
      }, [])
    
    return ( 
        <div className= 'character container'>
            {starWars.map(char =>
                <div className="characters" key={char.name}>
                    {char.name}  Birth Year: {char.birth_year}
                </div>
                    )}
    
        </div>
           
          )
            



        }
        
    
  export default Character;

