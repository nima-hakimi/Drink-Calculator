import React, { useState } from 'react';
import Input from './components/input'
import Drink from './components/drink'
import DropdownMenu from './components/dropdown'
import "./App.css"
const drinks_json = require('./drinks.json')

const options = Object.entries(drinks_json).map(d => d[0])
console.log(options)

const App = () => {
  const appStyle = {
    textAlign: "center",
    dislpay: "flex",
    justifyContent: "center",
  }

  const chooseStyle = {
    dislpay: "flex",
    flexDirection: "row",
    margin: "auto"
  }

  const [multiplier, setMultiplier] = useState(0)
  const [drink, setDrink] = useState("Mojito")

  return (
    <div style={appStyle}>
      <h1 class="colors"> NIMA'S COCKTAIL CALCULATOR </h1>
      <div style={chooseStyle}>
        <DropdownMenu options={options} setDrink={setDrink} />
        <Input setMultiplier={setMultiplier} />
      </div>
      {
        multiplier > 0
          ?
          <Drink multiplier={multiplier} drink={drink} />
          :
          <p style={{ color: "red" }}> Please insert a number </p>
      }
    </div>
  );
}

export default App;
