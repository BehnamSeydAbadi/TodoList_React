import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  handleStatus = () => {
      console.log("handleStatus");
  };

  handleDelete = () => {
    console.log("handleDelete");
  };

  render() {
    return (
      <div className='todoList'>
        <TodoItem
          text='Learn ReactJs'
          onStatusClick={this.handleStatus}
          onDeleteClick={this.handleDelete}
        />
        {/* <TodoItem text='Code a todo list' />
        <TodoItem text='Learn something else' /> */}
      </div>
    );
  }
}

export default TodoList;
