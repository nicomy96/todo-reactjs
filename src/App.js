import {TodoCounter} from './TodoCounter'
import {TodoSearch} from './TodoSearch'
import {TodoList} from './TodoList'
import {TodoItem} from './TodoItem'
import {CreateTodoButton} from './CreateTodoButton'
import React from 'react';
import './App.css';

function App() {
  const defaultToDos = [
    {text: "Cortar Cebolla",completed: true},
    {text: "Completar el curso de React",completed: false},
    {text: "Perseguir a un duende",completed: false},
    {text: "Atrapar al papa",completed: true}
  ];
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultToDos.map((toDo, index) => <TodoItem key={index} text={toDo.text} completed={toDo.completed}/>)}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

