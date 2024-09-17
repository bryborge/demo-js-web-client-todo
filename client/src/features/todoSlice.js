import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // TODO: remove in favor of "real" data. This is just to  show that redux is wired up correctly
  todos: [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
    },
    {
      id: 2,
      title: 'Todo 2',
      description: 'Description 2',
    },
    {
      id: 3,
      title: 'Todo 3',
      description: 'Description 3',
    }
  ],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    }
  },
});

export const { toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
