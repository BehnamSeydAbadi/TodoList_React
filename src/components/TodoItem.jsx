import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";



const TodoItem = ({ text, onStatusClick, onDeleteClick }) => {
  return (
    <div className='todoItem container'>
      <div className='todoItem-text'>{text}</div>
      <div className='todoItem-operation'>
        <CheckBoxOutlineBlank onClick={onStatusClick}/>
        <DeleteIcon onClick={onDeleteClick}/>
      </div>
    </div>
  );
};

export default TodoItem;
