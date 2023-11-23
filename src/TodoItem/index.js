import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import { DeleteIcon} from '../TodoIcon/DeleteIcon';

function TodoItem({text, completed, onComplete, onDelete}){
    return (
    <li className="TodoItem">
        <CompleteIcon completed={completed} onComplete={onComplete}/>
        {/* <span 
            className={`Icon Icon-check ${completed? "Icon-check--active": ""}`} 
            onClick={() => {
                setTodos(todos.map((value, i)=> i===index? {...value, completed: !completed}: value ));
            }}
        >
            V
        </span>  */}
        <p className={`TodoItem-p ${completed? "TodoItem-p--complete": ""}`}>{text}</p>
        <DeleteIcon onDelete={onDelete}/>
       {/*  <span className='Icon Icon-delete'
            onClick={() => {
                setTodos(todos.filter((_ , i) => i !== index));
        }}>X</span> */} 
    </li>
    );
}

export {TodoItem};
