import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBox from "@material-ui/icons/CheckBox";



const TodoItem = ({ description, checked, onChecked, onDeleteClick }) => {

  let descriptionClassName;

  if (checked === true)
    descriptionClassName = "checked";
  else
    descriptionClassName = '';


  return (
    <li>
      <div className='todoList-element todoItem todoItem-container'>
        <span className={descriptionClassName}>{description}</span>
        <div >
          {
            checked === true ?
              <CheckBox onClick={onChecked} className="pointer" /> :
              <CheckBoxOutlineBlank onClick={onChecked} className="pointer" />
          }
          <DeleteIcon onClick={onDeleteClick} />
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
