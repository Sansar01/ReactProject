import { createSlice, nanoid } from '@reduxjs/toolkit';
import AddTodo from '../component/AddTodo';
import { useDispatch } from 'react-redux';

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
           console.log(action.payload.text);

        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer