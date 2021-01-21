import React, { useReducer, useState, useEffect } from 'react';
import { TodoListItem } from './components/TodoListItem';
import { useForm } from './hooks/useForm';
import { todoReducer } from './reducer/todoReducer';
import { addTodo, completeTodo, removeTodo } from './reducer/todoActions';

import './style.css';
import { Form } from './components/Form';


const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    //Error state
    const [error, setError] = useState({
        error: false
    })

    //custom Hook
    const [ formValue, handleInputChange, reset ] = useForm(); 

    //Reducer
    const [todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos])


    //Actions
    const handleSubmit = (e) => {

        e.preventDefault();

        if(formValue.length <= 2){
            setError({
                status: true,
                msg:'Cada todo debe tener al menos 3 letras'
            })
            return;
        }
        
        if(todos.length >= 7 ){
            setError({
                status: true,
                msg: 'Solo se permiten hasta 7 todos'
            })
            return;
        }
 
        dispatch( addTodo(formValue ) );
        setError({ status: false });
        reset();
    }

    const handleListItemComplete = (todoId) => {

        dispatch( completeTodo(todoId) );
    }

    const removeTodoItem = (todoId) => {

        dispatch( removeTodo(todoId) );
    }

    return (
        <div className="container bg-dark text-white" >
            <h1 className='pt-3'>Todo App ({ todos.length }) </h1>

            <hr />

            <p> En este campo podras añadir un nuevo To-Do</p>

            <Form
                handleSubmit={ handleSubmit }
                formValue={ formValue }
                handleInputChange={ handleInputChange }
                error={ error }
                />
                
             <ul className='list-group mt-5'>
            {
                todos.map((todo) => (
                    <TodoListItem
                            removeTodo={ removeTodoItem }
                            handleListItemComplete={ handleListItemComplete }
                            key={ todo.id }
                            todo={ todo }/>
                ))
            }
            </ul>
            
        </div>
    )
}

