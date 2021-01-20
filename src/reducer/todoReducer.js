export const todoReducer = ( state = [], action ) => {

    switch (action.type) {

        case 'Add Todo':
            return [ ...state, action.payload ];

        case 'Complete Todo':
            return (state.map( (todo) => todo.id === action.payload ? { ...todo, done: !todo.done} : todo));
           
        default:
            return state;
    }
}
