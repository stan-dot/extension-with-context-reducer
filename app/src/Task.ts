export type Task = {
  id: number;
  text:string;
  done: boolean;
};

export type Action = {
  type:'changed' | 'deleted' | 'added';
  id?: number;
  text?: any;
  task?: Task
};