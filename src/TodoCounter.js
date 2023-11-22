import './TodoCounter.css';

function TodoCounter({ completed, total }){
    return (
        <h1>
            Has completado {completed} de {total}  ToDOS
        </h1>
    );
}

export {TodoCounter};