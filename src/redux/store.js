import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './feature/task/taskSlice';
import userSlice from './feature/user/userSlice';

export const store = configureStore({
  reducer: {
    tasksSlice: taskSlice,
    users: userSlice,
  },
});

export default store;
