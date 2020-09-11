import React from "react";

function ToDoItem(props) {
  const completedStyles = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }

  console.log(props.item.completed)

  return (
    <div className="todo-item">
      <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id) }/>
      <p styles= { props.item.completed ? completedStyles : null }>{props.item.text}</p>
    </div>
    
  );
 
}

export default ToDoItem;
