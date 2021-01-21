import React, { memo, useEffect, useState } from 'react';

export const TodoListItem = memo(({ todo, handleListItemComplete, removeTodo }) => {

    return (
        <li 
            onClick={ () => handleListItemComplete( todo.id )} 
            className={ 
                (!todo.done) 
                    ? 'animate__animated animate__slideInLeft list-group-item list list-group-item-danger'
                    : "list-group-item list list-group-item-success text-decoration-line-through"
            }   
            >
                {
                    (!todo.done)
                        ? <i className="far fa-square"></i>
                        : <i className="far fa-check-square animate__animated animate__flash"></i> 
                } { todo.textTodo }
            
            {
                (todo.done) && 
                    <i 
                        onClick={ () => removeTodo(todo.id) }
                        className="fas fa-trash"></i>
            }
        </li>
    )
})

