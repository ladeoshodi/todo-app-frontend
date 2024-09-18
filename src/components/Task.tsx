import { Link } from "react-router-dom";
import { ITask } from "../interfaces/task";

function Task({
  _id,
  name,
  owner,
  collaborators,
  status,
  priority,
  isCompleted,
  createdAt,
  updatedAt,
}: ITask) {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/tasks/${_id}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title">{name}</div>
          </div>
          <div className="card-content">
            <h4>owner: {owner.username}</h4>
            <h5>
              collaborators:{" "}
              <ul>
                {collaborators?.map((collaborator) => {
                  return (
                    <li key={collaborator._id}>- {collaborator.username}</li>
                  );
                })}
              </ul>
            </h5>
            <h5>status: {status}</h5>
            <h5>priority: {priority}</h5>
            <h5>{isCompleted ? "Completed" : "Not Completed"}</h5>
            <h6>Created At: {createdAt}</h6>
            <h6>Updated At: {updatedAt}</h6>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Task;
