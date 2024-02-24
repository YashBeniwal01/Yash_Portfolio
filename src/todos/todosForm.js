import React,{useState} from 'react';

export const TodoForm = () => {

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(value);
    }

    //Function to handle adding to new todo item
    const handleAddTodo = () =>{
        if(value.trim() !== ''){
            setTodos([...todos, value]);
            setValue('');
        }
    };

    return (
           <form className="todoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="what is the task for today sir!"
            onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" onClick={handleAddTodo} className="todo-btn ">Add Task</button>
            </form>  
            
            
     );
};