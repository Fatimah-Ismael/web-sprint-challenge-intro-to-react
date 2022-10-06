// Write your Character component here
import React from "react"
import { data } from "../mocks/handlers"


const Character = props => {
    const { character } = data.name;
    return (
        
            <div>
                {character}
            </div>
    )
}
export default Character;