import React, { useState } from 'react';
import Input from './components/Input'
import Drink from './components/drink'
import DropdownMenu from './components/dropdown'
import Header from './components/Header'
import "./index.css"


const drinks_json = require('./drinks.json')
const options = Object.entries(drinks_json).map(d => d[0])


const App = () => {
  
  const [multiplier, setMultiplier] = useState(0)
  const [drink, setDrink] = useState("Mojito")

  return (
    <div className="app">
      <Header />
      <div className="inputSection">
        <div className="input">
          <div className="inputHeader">Which drink?</div>
          <div className="inputFieldDropDown">
            <DropdownMenu options={options} setDrink={setDrink} />
          </div>
        </div>
        <div className="input">
          <div className="inputHeader">How many?</div>
          <div>
            <Input setMultiplier={setMultiplier} />
          </div>
        </div>
      </div>
      {
        multiplier > 0
          ?
          <Drink multiplier={multiplier} drink={drink} />
          :
          <div className="message"> Please choose drink and quantity </div>
      }
    </div>
  );
}

export default App;
