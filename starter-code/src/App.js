import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  state = {
    food: foods
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Iron Nutrition</h1>
        </header>
        <p className="App-intro">
        { this.state.food.map( (oneFood) => {
          return (
        <FoodBox {...oneFood} />
          )
        })
        }

        </p>
      </div>
    );
  }
}

export default App;
