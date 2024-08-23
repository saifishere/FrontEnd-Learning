import React from 'react'
import { useRef } from 'react'
import { IoMdAddCircle } from "react-icons/io";
const AddTodo = ({handleOnClick}) => {

    const todoNameElement = useRef()
    const dueDateElement = useRef()


    const handleAddButtons = (event) => {
        event.preventDefault()
        const todoName = todoNameElement.current.value
        const todoDate = dueDateElement.current.value
        handleOnClick(todoName, todoDate)
        todoNameElement.current.value = ""
        dueDateElement.current.value = ""
    }

  return (
    <div class="container text-center kg-row">
        <form class="row" onSubmit={handleAddButtons}>
            <div class="col-4">
                <input type = 'text' placeholder="Enter TODO Here" ref = {todoNameElement}></input>
            </div>
            <div class="col-4">
                <input type = 'date'  ref = {dueDateElement}></input>
            </div>
            <div class="col-2">
                <button type="submit" class="btn btn-success kg-button"><IoMdAddCircle /></button>
            </div>
        </form>
    </div>
  )
}

export default AddTodo
