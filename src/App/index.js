import React from 'react';
import './App.css';
import {AppUI} from './AppUI'
/* 
const defaultToDos = [
  {text: "Cortar Cebolla",completed: true},
  {text: "Completar el curso de React",completed: false},
  {text: "Perseguir a un duende",completed: false},
  {text: "Atrapar al Papa",completed: false}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
localStorage.removeItem('TODOS_V1'); */

function useLocalStorage(itemName, initialValue){

  const[item, setItem] = React.useState(() => {
    const itemFromStorage = localStorage.getItem(itemName);
    let parsedItem = itemFromStorage? JSON.parse(itemFromStorage) : initialValue;
    return parsedItem;
  });

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

  const completeTodo = (index) => {
    saveTodos(todos.map((value, i)=> i===index? {...value, completed: !value.completed}: value ));
  };
  const deleteTodo = (index) => {
    saveTodos(todos.filter((_ , i) => i !== index));
  }
  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;

