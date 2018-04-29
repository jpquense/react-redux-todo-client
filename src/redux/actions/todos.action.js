export const ADD_TODO = 'ADD_TODO';
export const addTodo = (text, id) => ({
    type: ADD_TODO,
    text,
    id
});

