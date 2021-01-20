import React, { useReducer, useState } from 'react';
import { TodoListItem } from './components/TodoListItem';
import { useForm } from './hooks/useForm';
import { todoReducer } from './reducer/todoReducer';
import { addTodo, completeTodo } from './reducer/todoActions';

import './style.css';

export const TodoApp = () => {

    console.log('new render');

    //Error state
    const [error, setError] = useState({
        error: false
    })

    //custom Hook
    const [ formValue, handleInputChange, reset ] = useForm(); 

    //Reducer
    const [todos, dispatch ] = useReducer(todoReducer, []);

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

    return (
        <div className="container bg-dark text-white shadow-" >
            <h1 className='pt-3'>Todo App ({ todos.length }) </h1>

            <hr/>

            <p> En este campo podras añadir un nuevo To-Do</p>

            <form onSubmit={ handleSubmit }>
                <input 
                    className="form-control-lg" 
                    autoComplete="off"
                    type="text"
                    name="todo-text"
                    value={ formValue } 
                    onChange={ handleInputChange }
                    placeholder="Añade un nuevo To-Do" />

                    <div className="mt-3 clearfix">
                        {
                            (error.status) &&
                                <span className="float-left bg-danger p-1">{ error.msg }</span>
                        }
                        
                        <button className="btn btn-success float-end">Añadir</button>
                    </div>
            </form>

            <ul className='list-group mt-5'>
            {
                todos.map((todo) => (
                    <TodoListItem
                            handleListItemComplete={ handleListItemComplete }
                            key={ todo.id }
                            todo={ todo }/>
                ))
            }
            </ul>
            
            
        </div>
    )
}

/*
PARA MEJORAR EN ESTA APP

- //Habilitar que el usuario pueda tachar y destachar todo
- //Agregar error si se ingresa un todo con menos de 5 caracteres
- //Hacer Split en varios componentes
- Permitir hasta 7 todo
- Permitir borrar todo
*/

