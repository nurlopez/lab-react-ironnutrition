// src/components/AddFood.js
import React, { Component } from 'react';

class AddFood extends Component {
    constructor(props){
        super(props);
      
        this.state = { 
          image: '',
          name: '',
          calories: '',
          quantity: 0
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addTheFood(this.state);
        // Reset the state
        this.setState({ image: '', name: '', calories: '', quantity: 0 });  	
      };

      handleChange(e) {
        e.preventDefault();
        // All our inputs have same `name` as the `state` property name.
        let { name, value } = e.target;
        
        this.setState( { [name]: value } );
      }

      render(){
        return (
          <div>
          <form onSubmit={this.handleFormSubmit}>
                <label>ImageURL:</label>
                <input name="image" type="text" value={this.state.image} onChange={(e) => this.handleChange(e)} />
    
                <label>Food Name:</label>
                <input name="name" type="text" value={this.state.name} onChange={(e) => this.handleChange(e)} />
    
                <label>Calories:</label>
                <input name="calories" type="text" checked={this.state.calories} onChange={(e) => this.handleChange(e)} />
    
                <label>Quantity:</label>
                <input name="quantity" type="number" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
                
                <button type="submit"> Submit </button>
            </form>
          </div>
        )
      }
    }
    
    export default AddFood;