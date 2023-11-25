import React from "react";
import { useLocalStorage} from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));

    const completeTodo = (index) => {
        saveTodos(todos.map((value, i)=> i===index? {...value, completed: !value.completed}: value ));
    };
    const deleteTodo = (index) => {
        saveTodos(todos.filter((_ , i) => i !== index));
    }
    const addTodo = (text) => {
        saveTodos([...todos, {text, completed: false}]);
    }
    return (
    <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        loading,
        error,
        openModal,
        setOpenModal}}>
        {children}
    </TodoContext.Provider>)
}

export {TodoContext, TodoProvider}