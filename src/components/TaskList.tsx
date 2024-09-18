import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ITask } from "../interfaces/task";

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
          {tasks?.map((task) => {
            return (
              <div
                key={task._id}
                className="column is-one-quarter-desktop is-one-third-tablet"
              >
                <Link to={`/tasks/${task._id}`}>
                  <div className="card">
                    <div className="card-header">
                      <div className="card-header-title">{task.name}</div>
                    </div>
                    <div className="card-content">
                      <h4>owner: {task.owner.username}</h4>
                      <h5>
                        collaborators:{" "}
                        <ul>
                          {task.collaborators?.map((collaborator) => {
                            return (
                              <li key={collaborator._id}>
                                - {collaborator.username}
                              </li>
                            );
                          })}
                        </ul>
                      </h5>
                      <h5>status: {task.status}</h5>
                      <h5>priority: {task.priority}</h5>
                      <h5>
                        {task.isCompleted ? "Completed" : "Not Completed"}
                      </h5>
                      <h6>Created At: {task.createdAt}</h6>
                      <h6>Updated At: {task.updatedAt}</h6>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TaskList;
