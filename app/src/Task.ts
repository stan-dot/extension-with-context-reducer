export type Task = {
  id: number;
  text:string;
  done: boolean;
};

type Update = {
  update:'changed' | 'deleted' | 'added';
 }
