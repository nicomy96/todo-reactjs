import './TodoSearch.css';
import React from 'react';
function TodoSearch({searchValue, setSearchValue}){
    
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