import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './contexts/TasksContext';

export default function TaskApp() {
  return (
    <>
      <TasksProvider>
        <h1 className='text-red-500 underline'>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TasksProvider>
    </>
  );
}