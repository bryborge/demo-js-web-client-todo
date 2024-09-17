import { createSlice } from '@reduxjs/toolkit';

// TODO: If we want to keep state across sessions, we'll need to store todos somewhere and load it here.
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
});

export const { addTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
