import todoReducer, { toggleComplete } from './todoSlice';

describe('todoSlice reducer', () => {
  it('should toggle the completion status of a task', () => {
    // Arrange
    const initialState = {
      todos: [{ id: '1', text: 'Test Todo', completed: false }],
    };

    // Act
    const newState = todoReducer(initialState, toggleComplete('1'));
    // Assert
    expect(newState.todos[0].completed).toBe(true);

    // Act
    const toggledBackState = todoReducer(newState, toggleComplete('1'));
    // Assert
    expect(toggledBackState.todos[0].completed).toBe(false);
  });
});
