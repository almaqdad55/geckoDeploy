import "../Styles/Login.css";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <h2>Login</h2>
        <div className="LoginForm">
          <input placeholder="Username"></input>
          <br />
          <input type="password" placeholder="password"></input>
          <br />
          <Link to="/">
          <button className> Login </button>
          </Link>
        </div>

        <div>
          <span className="bottomBorder"></span>
          <span className="bottomBorder"></span>
        </div>
        <div>
          <span>Don't have an account? </span>
          <a href="/createAccount">Create One</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
