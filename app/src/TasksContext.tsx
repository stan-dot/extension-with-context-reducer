import { createContext, useContext, useReducer } from "react";
import { initialTasks } from "./initialTasks";
import { Task } from "./Task";


export const TasksContext = createContext(null);
// export const TasksContext = createContext<Task[]>([]);
export const TasksDispatchContext = createContext(null);


export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

export function TasksProvider({ children }: any) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  return <TasksContext.Provider value={tasks}>
    <TasksDispatchContext.Provider value={dispatch}>
      {children}
    </TasksDispatchContext.Provider>
  </TasksContext.Provider>
}

// export function tasksReducer(tasks: Task[], action) {
export function tasksReducer(tasks: Task[], action: any) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}