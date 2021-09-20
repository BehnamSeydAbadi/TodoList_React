import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  state = {
    todoItems: [],
  };

  componentDidMount() {
    const todoItems = [
      { id: "ae88082c-eb8e-45f5-b8cf-547e7105f0a0", description: "Learn ReactJs", checked: false },
      { id: "a42eaf61-85c8-4fc5-a0de-e97004232ea4", description: "Code a todo list", checked: false },
      { id: "e477d69b-adab-4fed-bfd5-c72f3247080b", description: "Keep learning", checked: false },
    ];

    this.setState({ todoItems });
  }

  handleChecked = (todoItem) => {

    const todoItems = [...this.state.todoItems];
    const index = todoItems.indexOf(todoItem);

    todoItems[index].checked = !todoItems[index].checked;

    this.setState({ todoItems });
  };

  handleDelete = () => {
    console.log("handleDelete");
  };

  render() {
    return (
      <div className='todoList'>

        {this.state.todoItems.map((todoItem) => (
          <TodoItem
            key={todoItem.id}
            description={todoItem.description}
            checked={todoItem.checked}
            onChecked={() => this.handleChecked(todoItem)}
            onDeleteClick={this.handleDelete}
          />
        )
        )}


        {/* <TodoItem text='Code a todo list' />
        <TodoItem text='Learn something else' /> */}
      </div>
    );
  }
}

export default TodoList;
