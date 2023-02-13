import { useReducer } from 'react';
import AddTask from './AddTask';
import { TasksContext, TasksDispatchContext, TasksProvider, tasksReducer } from './TasksContext';
import TaskList from './TaskList';

export default function TaskApp() {
  return (
    <>
      <TasksProvider>

        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}