import React, { useState } from 'react';

export const EditTodoForm = () => {
    
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    function addTask(){
        if(inputValue.trim() !== ''){
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    }

    function removeTask(index){
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function taskDone(){
        
    }

    return(
        <div>

            <input type = "text" value={inputValue} placeholder='add your task' onChange={(e) => setInputValue(e.target.value)}/>
            <button onClick={addTask} type='button'>Add Task</button>

            <ul>
                {todos.map((todo, index) => {
                    return (
                        <li key = "index">
                            {todo}
                            <button onClick={() => removeTask(index)}>x</button>

                            
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};