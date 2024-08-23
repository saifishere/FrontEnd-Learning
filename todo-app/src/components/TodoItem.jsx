import React from 'react'
import { MdDelete } from "react-icons/md";
const TodoItem1 = ({todoName, todoDate, onDeleteClick}) => {

  return (
    <div class="container kg-row">
      <div class="row">
          <div class="col-4">
            {todoName}
          </div>
          <div class="col-4">
            {todoDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-warning kg-button" onClick={() => onDeleteClick(todoName)}><MdDelete /></button>
          </div>
        </div>
    </div>
  )
}

export default TodoItem1
