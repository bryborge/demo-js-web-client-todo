import { createSlice } from '@reduxjs/toolkit';

// TODO: If we want to keep state across sessions, we'll need to store todos somewhere and load it here.
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    /**
     * Adds a new todo item to the list of todos.
     *
     * The new todo item should be passed as the payload of the action.
     *
     * @param {Object} state - The current state of the Redux store.
     * @param {Object} action - The action object, with a payload property containing the new todo item.
     * @returns {Object} The new state of the Redux store.
     */
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    /**
     * Removes a todo item from the list of todos.
     *
     * The id of the todo item to remove should be passed as the payload of the action.
     *
     * @param {Object} state - The current state of the Redux store.
     * @param {Object} action - The action object, with a payload property containing the id of the todo item to remove.
     * @returns {Object} The new state of the Redux store.
     */
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    /**
     * Toggles the completion status of a todo item.
     *
     * The id of the todo item to toggle should be passed as the payload of the action.
     *
     * @param {Object} state - The current state of the Redux store.
     * @param {Object} action - The action object, with a payload property containing the id of the todo item to toggle.
     * @returns {Object} The new state of the Redux store.
     */
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
