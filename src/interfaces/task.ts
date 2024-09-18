import { IUser } from "./user";

interface ISubtask {
  _id: string;
  name: string;
  isCompleted: boolean;
}

export interface ITask {
  _id: string;
  name: string;
  owner: IUser;
  status: string;
  priority: string;
  isCompleted: boolean;
  collaborators: Array<IUser>;
  subtasks: Array<ISubtask>;
}
