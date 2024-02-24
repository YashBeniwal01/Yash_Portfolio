import './todo.css';
import React, { useState } from "react";
import { TodoForm } from "./todosForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {

    //inputValue = current value
    // setInputValue = update the value
    const [inputValue, setInputValue] = useState('');
    //todos = array
    //setTodos = update the array
    const [todos, setTodos]  = useState([]);

    function addTask(){
        if(inputValue.trim() !== ''){
            setTodos([...todos, {text:inputValue, done:false}]);
            setInputValue('');
        }
    }

    function removeTask(index){
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }
    function taskDone(index){
        const newTodos = [...todos];
        newTodos[index].done = true;
        setTodos(newTodos);
    }

    return (
        <div className='Todo-Wrapper'>
             <input className='todo-input' type = 'text' value={inputValue} placeholder='add your task' onChange={(e) => setInputValue(e.target.value)}/>
             <button className='todo-btn' onClick={addTask}>Add Task</button>

             
                {todos.map((todo, index) => {
                    return (
                        
                        <div key={index} className={`todo-task ${todo.done ? 'done' : ''}`}>
                            
                            <h3>{todo.text}</h3>
                            <div className='btns'>
                                <button onClick={() => removeTask(index)} style={{ padding: '5px 10px', fontSize: 'inherit' }} className='remove-btn'>Remove</button>
                                <button onClick={() => taskDone(index)} className='done-btn'>Done</button>
                            </div>
                        </div>
                    );
                })}
        
             
        </div>      

    );


   
   
}

