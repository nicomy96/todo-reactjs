import './TodoCounter.css';

function TodoCounter({ completed, total }){
    return (
        completed===total?
        <h1 className="TodoCounter">
            <span>Felicitaciones has completado los Todos</span>
        </h1>
        :
        <h1 className="TodoCounter">
            Has completado <span> {completed} </span>  de  <span> {total} </span>  ToDOS
        </h1>

    );
}

export {TodoCounter};