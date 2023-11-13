import { useDispatch } from "react-redux";
import { removeTodo, toggleTodoChecked} from "../store/todoSlice";

const TodoItem =({id, text, checked}) =>{
    const dispatch=useDispatch();
    return(
        <li key={id}>
            <input type='checkbox' checked={checked} onChange={() => dispatch(toggleTodoChecked({id}))} />
            <span>{text}</span>
            <span className='delete' onClick={() => dispatch(removeTodo({id}))}>X</span>

        </li>
    )
}
export default TodoItem