import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOutlineBlank from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBox from "@material-ui/icons/CheckBox";



const TodoItem = ({ description, checked, onChecked, onDeleteClick }) => {

  let descriptionClassName;

  if (checked === true)
    descriptionClassName = "todoItem-description checked";
  else
    descriptionClassName = "todoItem-description";

  return (
    <div className='todoItem container'>
      <div className={descriptionClassName}>{description}</div>
      <div className='todoItem-operation'>
        {
          checked === true ?
            <CheckBox onClick={onChecked} className="checkBox" /> :
            <CheckBoxOutlineBlank onClick={onChecked} className="checkBox" />
        }
        <DeleteIcon onClick={onDeleteClick} />
      </div>
    </div>
  );
};

export default TodoItem;
