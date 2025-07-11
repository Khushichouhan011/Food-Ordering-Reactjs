import { useState } from "react";
import "./Login.css";
import { IoMdClose } from "react-icons/io";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={(e) => e.preventDefault()}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <IoMdClose onClick={() => setShowLogin(false)} className="close-icon" />
        </div>

        <div className="login-popup-inputs">
          {currState === "Sign up" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit">
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" className="submit" required />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>

        {currState === "Login" ? (
          <p className="para1">
            Don't have an account?{" "}
            <span onClick={() => setCurrState("Sign up")}>Sign up here</span>
          </p>
        ) : (
          <p className="para">
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
