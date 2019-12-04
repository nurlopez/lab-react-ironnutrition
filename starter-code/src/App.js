import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';

class App extends Component {
  state = {
    food: foods,
    showAddFood: true
  }

  addFoodHandler = (newFood) => {
    const foodsCopy = [...this.state.food];
    foodsCopy.push(newFood);
    
    this.setState({ food: foodsCopy })
  }

  toggleFoods = () => {
    this.setState({ showAddFood: !this.state.showAddFood }
      , console.log(this.state));
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
        <button onClick={this.toggleFoods}>Add food</button>

        { this.state.showAddFood ?
          <AddFood addTheFood={this.addFoodHandler}/> 
          : null
        } 
        
        </p>
      </div>
    );
  }
}

export default App;
