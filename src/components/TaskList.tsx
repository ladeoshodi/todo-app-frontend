import { useEffect, useState } from "react";
import { ITask } from "../interfaces/task";
import Task from "./Task";

type Tasks = null | Array<ITask>;

function TaskList() {
  const [tasks, setTasks] = useState<Tasks>(null);

  useEffect(() => {
    const URL = "http://localhost:3000/api/tasks";
    async function fetchTasks() {
      const response = await fetch(URL);
      const taskData = await response.json();
      setTasks(taskData);
    }

    fetchTasks();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {tasks?.map((task) => (
            <Task {...task} key={task._id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TaskList;
