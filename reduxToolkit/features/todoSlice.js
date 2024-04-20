import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import AddTodo from "../component/AddTodo";
import { useDispatch } from "react-redux";

const initialState = {
    todos: [{ id: 1, text: "Hello world" }],
    selectedTodo: null,
};

export let selecttodo = "";

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {

            if (action.payload != state.selectedTodo) {
                console.log(action.payload);
                state.todos.map((todo) =>
                    todo.id == action.payload ? state.todos.push(todo) : state.todos
                );
                state.selectedTodo = " ";
            }

            const { id, text } = action.payload;
            const todoIndex = state.todos.findIndex((todo) => todo.id == id);

            if (todoIndex != -1) {
                state.todos[todoIndex].text = text;
                state.selectedTodo = state.todos[todoIndex];
              // get particular todo and assign to the selectedTodo 
            }
            
        },
    },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
