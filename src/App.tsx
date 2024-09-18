import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReactToastContainer from "./components/ReactToastContainer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ReactToastContainer />
    </>
  );
}

export default App;
