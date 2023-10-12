import "../Styles/CreateAccount.css";
import { Link } from "react-router-dom";

export const CreateAccount = () => {
  return (

    <div className="container">
      <div className="createAccount">
        <h2>Create Account</h2>
        <div className="fields">
          <input placeholder="Family Name"></input>
          <input placeholder="Given Name(s)"></input>
        </div>

        <div className="fields">
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Mobile"></input>
        </div>
        <div className="fields">
          <input type="password" placeholder="Password"></input>
          <input type="password" placeholder="Re-TypePassword"></input>
        </div>
        <div>
          <input
            className="terms"
            type="checkbox"
            value="Terms and Conditions"
          ></input>
          <label className="TLabel" for="Terms and Conditions">
            I accept the 
          </label> <a className="TermsAndConditions" href="/">Terms and Conditions</a>
          <br></br>
          <Link to="/">
          <button> Create Account</button>
          </Link>
        </div>

        <div>
          <h4>Already Have an Account? </h4>

          <a href="/login">Sign in</a>
        </div>
      </div>
    </div>
    


  );
};

export default CreateAccount;
