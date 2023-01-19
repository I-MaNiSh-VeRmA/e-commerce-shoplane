import Footer from "../../components/Shared/Footer/Footer";
import Header from "../../components/Shared/Header/Header";
import "./Login.css";
import React from "react"

function Login (props) {

function submitLogin(){
    alert("Login Successful");
}

  return (
    <div>
      <Header/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control2 mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control2 mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={submitLogin}>
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
          <p className="forgot-signup text-left mt-2">
            Don't have an account <a href="/register">Signup</a>
          </p>
        </div>
      </form>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default Login;