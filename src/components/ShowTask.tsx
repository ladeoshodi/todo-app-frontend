import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ITask } from "../interfaces/task";
import Task from "./Task";

function ShowTask() {
  const [task, setTask] = useState<ITask | null>(null);
  const { taskId } = useParams();

  useEffect(() => {
    const URL = `http://localhost:3000/api/tasks/${taskId}`;

    async function fetchTask() {
      const response = await fetch(URL);
      const taskData = await response.json();
      setTask(taskData);
    }

    fetchTask();
  }, [taskId]);

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">{task && <Task {...task} />}</div>
      </div>
    </section>
  );
}

export default ShowTask;
