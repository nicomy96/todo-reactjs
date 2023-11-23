import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import React from 'react';

function AppUI({completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo}){
    return(
        <React.Fragment>
            <TodoCounter 
                completed={completedTodos} 
                total={totalTodos}
            />
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
            <TodoList>
                {searchedTodos.map((toDo, index) => <TodoItem key={index} text={toDo.text} completed={toDo.completed} 
                onComplete={() => completeTodo(index)} onDelete={() => deleteTodo(index)}/>)}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
        )
}

export {AppUI};