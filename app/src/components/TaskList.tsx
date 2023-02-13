import { useTasks } from '../contexts/TasksContext';
import { Task } from '../types/Task';
import { TaskDisplay } from './TaskDisplay';

export default function TaskList() {

  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <TaskDisplay task={task} />
        </li>
      ))}
    </ul>
  );
}
