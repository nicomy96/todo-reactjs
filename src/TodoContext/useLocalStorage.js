import React from "react";

function useLocalStorage(itemName, initialValue){
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    const[item, setItem] = React.useState(initialValue);
    
    React.useEffect(() => {
        setTimeout(() => {
            try{
                const itemFromStorage = localStorage.getItem(itemName);
                let parsedItem = itemFromStorage? JSON.parse(itemFromStorage) : initialValue; 
                setItem(parsedItem);
                setLoading(false);
            }catch(err){
                setLoading(false);
                setError(true);
            }
        }, 2000);
    }, []);

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    }

    return {item, saveItem, loading, error};
}

export {useLocalStorage};

/* 
localStorage.removeItem('TODOS_V1');
const defaultToDos = [
{text: "Cortar Cebolla",completed: true},
{text: "Completar el curso de React",completed: false},
{text: "Perseguir a un duende",completed: false},
{text: "Atrapar al Papa",completed: false}
];
localStorage.setItem('TODOS_V1', JSON.stringify(defaultToDos));
 */