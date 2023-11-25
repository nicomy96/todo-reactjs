import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';
function TodoSearch(){
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <input placeholder="cortar cebolla" 
        value={searchValue}
        className="TodoSearch"  
        onChange={(event)=>{
            setSearchValue(event.target.value);    
        }}
        />       
    );
}

export {TodoSearch};