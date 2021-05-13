import React from "react"
import groceries from "../data/groceriesData.js"
import GroceryListItem from "./GroceryListItem.jsx"

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      groceries: groceries,
      item: '',
      quantity: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  //take in the input and update our state
  handleChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  //update the grocery list with the new item
  handleSubmit(e){
    var newItem = {
      name: this.state.item,
      quantity: this.state.quantity
    }
    this.setState({
      groceries: this.state.groceries.concat(newItem),
      //cannot figure out how to reset the input value to nothing
      item: '',
      quantity: ''
    })
    e.preventDefault();

  }


  render(){
    return(
      <div>
        <img src="grocery-bags.png" />
        <h1>Grocery List</h1>
        <form onSubmit={this.handleSubmit}>
          <label> Item
            <input name="item" type="text" value={this.state.item} onChange={this.handleChange}/>
          </label>
          <label> Quantity
            <input name="quantity" type="text" value={this.state.quantity} onChange={this.handleChange}/>
          </label>
          <button>Add Grocery</button>
          <ul className="groceries">
            {this.state.groceries.map((groceryItem, index) => <GroceryListItem key={index} groceryItem={groceryItem}/>)}
          </ul>
        </form>
      </div>
    )
  }
};

export default App;


// value={this.state.item} onChange={this.handleChange}
// value={this.state.quantity} onChange={this.handleChange}