import React from 'react'

export const Form = ({ handleSubmit, formValue, handleInputChange, error}) => {
    return (
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

    )
}
