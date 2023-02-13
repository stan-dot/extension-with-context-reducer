import { useContext } from 'react';
import { Task } from './Task';
import { TaskDisplay } from './TaskDisplay';
import { TasksContext } from './TasksContext';

export default function TaskList() {

  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>
          <TaskDisplay
            task={task}
          />
        </li>
      ))}
    </ul>
  );
}
