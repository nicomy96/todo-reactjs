import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {EmptyTodos} from '../EmptyTodos';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import { TodoContext } from '../TodoContext';
import { TodoForm } from '../TodoForm';
import {ModalBackground} from '../ModalBackground'
import React from 'react';

function AppUI(){
    const {
        loading, 
        error, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        } = React.useContext(TodoContext);
    return(
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading? 
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                : null}
                {error? <TodosError />: null}
                {!loading && searchedTodos.length === 0 ? <EmptyTodos />: null }
                {searchedTodos.map((toDo, index) => <TodoItem key={index} text={toDo.text} completed={toDo.completed} 
                onComplete={() => completeTodo(index)} onDelete={() => deleteTodo(index)}/>)}
            </TodoList>
            <CreateTodoButton />
            {openModal? 
                <ModalBackground>
                    <TodoForm />
                </ModalBackground>
                :null
            }
        </React.Fragment>
        )
}

export {AppUI};