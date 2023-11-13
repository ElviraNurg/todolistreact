import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        addTodo(state, action) {
            console.log(state);
            console.log(action);
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                checked: false,
            })
        },
        removeTodo(state, action) {
            state.todos= state.todos.filter(todo=>todo.id!==action.payload.id)
         },
        toggleTodoChecked(state, action) {
            const toggledTodo=state.todos.find(todo=>todo.id===action.payload.id);
            toggledTodo.checked=!toggledTodo.checked;
         }
    }
},

)
export const {addTodo, removeTodo, toggleTodoChecked} = todoSlice.actions;
export default todoSlice.reducer;