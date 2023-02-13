import { Task } from './Task';
import { TaskDisplay } from './TaskDisplay';
import { useTasks } from './TasksContext';

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
