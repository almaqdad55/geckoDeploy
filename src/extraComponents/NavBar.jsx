import "../Styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  return (
    <ul className="Navbar">
      <li className="logo">
        <img src="Gecko.PNG" className="logoImage"></img>
        <h3>Gecko Credit</h3>
      </li>
      <li>
        <a href="/CreditCards">Credit Cards</a>
      </li>
      <li>
        <a href="/">Loans</a>
      </li>
      <li>
        <a href="/">Approval Process</a>
      </li>
      <li>
        <a href="/About">About</a>
      </li>



      <Link to="/login">
      <button className="loginButton" onclick="/login">
        Log In
      </button>
      </Link>
      <Link to="/createAccount">
      <button className="createAccountButton">Create Account</button>
      </Link>
    </ul>
  );
};

export default NavBar;
