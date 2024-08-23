import React from 'react'
import TodoItem from './TodoItem'
const TodoContainer = ({todoItems, onDeleteClick}) => {
  return (
    <div className='items-container'>
      {todoItems.map(items => <TodoItem todoName = {items.name} todoDate = {items.dueDate} onDeleteClick = {onDeleteClick}></TodoItem> )}
    </div>
  )
}

export default TodoContainer
