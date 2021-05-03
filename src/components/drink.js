import React from 'react'
import image1 from '../images/Mojito.jpg'
import image2 from '../images/Margarita.jpg'
import image3 from '../images/BloodyMary.jpg'
import image4 from '../images/IrishCoffee.jpg'
import image5 from '../images/GinAndTonic.jpg'
import image6 from '../images/PinaColada.jpg'
import image7 from '../images/MoscowMule.jpg'

const drinks_json = require('../drinks.json')

const Drink = (props) => {
    const multiplier = props.multiplier
    const drink = props.drink
    const drinkId = drinks_json[drink]["id"]
    const ingredientObj = drinks_json[drink]["ingredients"]
    const ingredients = Object.entries(ingredientObj)

    const images = [image1, image2, image3, image4, image5, image6, image7]

    return (
        <div className="drink">
            <div className="drinkMainSection">
                <div className="drinkSection">
                    <div className="drinkImage">
                        <img src={images[drinkId]} alt="" width="200" height="300" />
                    </div>
                </div>
                <div className="drinkSection">
                    <div className="drinkName">{drink}</div>
                    { multiplier <= 1 && <div className="drinkIngredients">Ingredients needed for {multiplier} drink</div> }
                    { multiplier > 1 && <div className="drinkIngredients">Ingredients needed for {multiplier} drinks</div> }
                    { ingredients.map((elem) => <div className="drinkIngredient"> - <b>{(elem[1] * multiplier).toFixed(2)}</b> {elem[0]} </div>) }
                </div>
            </div>
        </div>
    )
}

export default Drink
