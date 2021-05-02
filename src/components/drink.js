import React from 'react'
const drinks_json = require('../drinks.json')

const Drink = (props) => {
    const multiplier = props.multiplier
    const drink = props.drink
    const ingredientObj = drinks_json[drink]
    const ingredients = Object.entries(ingredientObj)

    return (
        <div>
            <h3> {drink} </h3>
            <p> Ingredients:</p>
            {
                ingredients.map((elem) => <p> * <b>{elem[1] * multiplier}</b> {elem[0]} </p>)
            }
        </div>
    )
}

export default Drink
