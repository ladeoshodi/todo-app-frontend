import { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorData, setErrorData] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirmation: "",
  });

  const navigate = useNavigate();

  function handleChange(e: SyntheticEvent) {
    const targetElement = e.target as HTMLInputElement;
    const newFormData = {
      ...formData,
      [targetElement.name]: targetElement.value,
    };
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();

    try {
      const URL = "http://localhost:3000/api/user/signup";
      // use axios to make a post request. We don't have to do response.json() with axios (if does it for us)
      const response = await axios.post(URL, formData);
      toast(response.data.message);
      // if we get a successful response, we will take them to the login page
      navigate("/login");
    } catch (error: any) {
      toast(error.response.data);
    }
  }

  return (
    <div className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="username" className="label">
              Username
            </label>
            <div className="control">
              <input
                id="username"
                type="text"
                className="input"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errorData?.username && (
                <small className="has-text-danger">{errorData.username}</small>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="label">
              Email
            </label>
            <div className="control">
              <input
                id="email"
                type="text"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errorData?.email && (
                <small className="has-text-danger">{errorData.email}</small>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="password" className="label">
              Password
            </label>
            <div className="control">
              <input
                id="password"
                type="text"
                className="input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errorData?.password && (
                <small className="has-text-danger">{errorData.password}</small>
              )}
            </div>
          </div>

          <div className="field">
            <label htmlFor="passwordConfirmation" className="label">
              Password Confirmation
            </label>
            <div className="control">
              <input
                id="passwordConfirmation"
                type="text"
                className="input"
                name="passwordConfirmation"
                value={formData.passwordConfirmation}
                onChange={handleChange}
              />
              {errorData?.passwordConfirmation && (
                <small className="has-text-danger">
                  {errorData.passwordConfirmation}
                </small>
              )}
            </div>
          </div>

          <button className="button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
