import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/main.css";
import App from "./App";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import ShowTask from "./components/ShowTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/tasks", element: <TaskList /> },
      { path: "/tasks/:taskId", element: <ShowTask /> },
      { path: "/signup", element: <p>Sign Up</p> },
      { path: "/login", element: <p>Login</p> },
      { path: "/create", element: <p>Create Task</p> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
