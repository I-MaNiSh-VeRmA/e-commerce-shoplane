import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
function Register() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  function handleFormSubmit(event) {

    // console.log(JSON.stringify(user));
    // redirect to login.
    navigate("/login");
  }

  return (
    <div>
      <Header />
      <div className="register-form">
        <div className="heading-line">
          <h3 >Please Register.</h3>
          <hr />
        </div>
        <div className="signup-box">
          <form className="signup-class" onSubmit={handleFormSubmit} action="">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                onInput={(e) => {
                  user.email = e.target.value;
                  setUser(user);
                }}
                name="email"
                className="form-control"
                type="email"
              />
            </div>
            <div className="name-row">
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  onInput={(e) => {
                    if (!user.name) user.name = {};
                    user.name.firstname = e.target.value;
                    setUser(user);
                  }}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label">
                  Last Name
                </label>
                <input
                  onInput={(e) => {
                    if (!user.name) user.name = {};
                    user.name.lastname = e.target.value;
                    setUser(user);
                  }}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Username
              </label>
              <input
                onInput={(e) => {
                  user.username = e.target.value;
                  setUser(user);
                }}
                className="form-control"
                type="text"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className=" form-label mb-3">
                Password
              </label>
              <input
                onInput={(e) => {
                  user.password = e.target.value;
                  setUser(user);
                }}
                className="form-control"
                type="password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Phone
              </label>
              <input
                onInput={(e) => {
                  user.phone = e.target.value;
                  setUser(user);
                }}
                className="form-control"
                type="tel"
              />
            </div>
            <h4 className="address-head" >Address</h4>
            <div className="address-row">
              <div className="address-line-1">

                <div className="mb-3 col-6">
                  <input
                    onInput={(e) => {
                      if (!user.address) user.address = {};
                      user.address.city = e.target.value;
                      setUser(user);
                    }}
                    placeholder="City"
                    className="form-control1"
                    type="text"
                  />
                </div>
                <div className="mb-3 col-6">
                  <input
                    onInput={(e) => {
                      if (!user.address) user.address = {};
                      user.address.street = e.target.value;
                      setUser(user);
                    }}
                    placeholder="Street"
                    className="form-control1"
                    type="text"
                  />
                </div>
              </div>
              <div className="address-line-2">
                <div className="mb-3 col-6">
                  <input
                    onInput={(e) => {
                      if (!user.address) user.address = {};
                      user.address.number = e.target.value;
                      setUser(user);
                    }}
                    placeholder="Flat No"
                    className="form-control1"
                    type="number"
                  />
                </div>
                <div className="mb-3 col-6">
                  <input
                    onInput={(e) => {
                      if (!user.address) user.address = {};
                      user.address.zipcode = e.target.value;
                      setUser(user);
                    }}
                    placeholder="Zip Code"
                    className="form-control1"
                    type="text"
                  />
                 
                </div>
              </div>


            </div>
            <div className="signup-btn mt-3 mb-4">
                    <button type="submit" className=" btn-up float-end btn btn-success">
                      Register
                    </button>
                  </div>
          </form>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default Register;