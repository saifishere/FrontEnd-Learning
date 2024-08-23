import AppName from './components/AppName'
import AddTodo from './components/AddTodo';
import './App.css'
import TodoContainer from './components/TodoContainer';
import WlcmMsg from './components/WlcmMsg';
import { useReducer, useState } from 'react';
import { TodoItemsContext } from './store/todo-items-store';

const todoItemsReducer = (currTodoItems, action) =>{
  let newTodoItems = currTodoItems;
  if(action.type === 'NEW_ITEM'){
    newTodoItems = [...currTodoItems, {name: action.payload.itemName, dueDate: action.payload.itemDueDate}]
  }
  else if(action.type === 'DELETE_ITEM'){
    newTodoItems = currTodoItems.filter((item) => item.name !== action.payload.itemName)
  }
  return newTodoItems;
}


function App() {

  //const [todoItems, setTodoItems] = useState([]);

  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleOnClick = (itemName, itemDueDate) => {

    const addNewItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      }
    } 

    dispatchTodoItems(addNewItem);

    // const newval = [...todoItems, {name: itemName, dueDate: itemDueDate}]
    // setTodoItems(newval)
  }

  const handleOnDeleteClick = (itemName) => {

    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName,
      }
    } 

    dispatchTodoItems(deleteItem);

    // const newval = todoItems.filter(items => items.name !== itemName)
    // setTodoItems(newval)
  }

  return (
    <TodoItemsContext.Provider>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo handleOnClick={handleOnClick}></AddTodo>
        <WlcmMsg todoItems={todoItems}></WlcmMsg>
        <TodoContainer todoItems={todoItems} onDeleteClick = {handleOnDeleteClick}></TodoContainer>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
