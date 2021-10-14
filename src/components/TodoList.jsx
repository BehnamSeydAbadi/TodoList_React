import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoItems, areToDoItemsSorted, onChecked, onDeleteClick }) => {

  return (
    <ul className='todoList'>
      {todoItems.map((todoItem) =>
      (
        <TodoItem
          key={todoItem.id}
          description={todoItem.description}
          areToDoItemsSorted={areToDoItemsSorted}
          checked={todoItem.checked}
          onChecked={() => onChecked(todoItem)}
          onDeleteClick={() => onDeleteClick(todoItem)}
        />
      )
      )}
    </ul>
  );
}


export default TodoList;
