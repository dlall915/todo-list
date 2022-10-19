import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    list: [],
  },
  reducers: {
    setTodos(state, action) {
      state.list = action.payload;
    },
    addTodo(state, action) {
      state.list.push({
        id: state.list[state.list.length - 1].id + 1,
        title: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      state.list = state.list.filter((todoItem) => todoItem.id !== action.payload);
    },
    toggleTodo(state, action) {
      // eslint-disable-next-line max-len
      state.list = state.list.map((todoItem) => (todoItem.id === action.payload ? { ...todoItem, completed: !todoItem.completed } : { ...todoItem }));
    },
  },
});

export const {
  setTodos, addTodo, removeTodo, toggleTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
