import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './feature/task/taskSlice';

export const store = configureStore({
  reducer: {
    tasksSlice:taskSlice,
  },
})

export default store