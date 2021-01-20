export const addTodo = (formValue) => {

    const newTodo = {
        id: new Date().getTime(),
        textTodo: formValue,
        done: false
    }

    return {
        type: 'Add Todo',
        payload: newTodo
    }
}

export const completeTodo = (todoId) => {

    return {
        type: 'Complete Todo',
        payload: todoId
    }
}

export const removeTodo = (todoId) => {

    return {
        type: 'Remove Todo',
        payload: todoId
    }
}


//DeleteTodo