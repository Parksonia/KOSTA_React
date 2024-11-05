import {useReducer} from 'react';
import {intiTodos,myReducer } from './MyReducer';
const ReducerEx1 =() =>{
    const [todos,dispatch] =useReducer(myReducer,intiTodos); //reducer초기화
    return(
        <>
            {todos.map(todo=>(
                <div key={todo.id}>
                    <label>
                        <input type='checkbox' checked={todo.complete}
                        onChange={()=>dispatch({type:"COMPLETE",id:todo.id})}/>
                        {todo.title}&nbsp;&nbsp;&nbsp;
                        {todo.count}&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>dispatch({type:"INCREMENT",id:todo.id})}>+</button>
                    </label>
                </div>
            ))}    
        </>
    )
}
export default ReducerEx1;