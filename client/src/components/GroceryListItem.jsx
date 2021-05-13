import React from "react"

var GroceryListItem = (props) => {
  return(
    <div>
      {props.groceryItem.name} - {props.groceryItem.quantity}
    </div>
  )
}

export default GroceryListItem