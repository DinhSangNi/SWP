import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseNavigate } from "react-router-dom";

import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import { loginUser } from "../redux/apiRequest";

const cx = classNames.bind(styles);

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isError = useSelector((state) => state.login.error);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    loginUser(user, dispatch, navigate);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={`container ${cx("login-container")}`}>
        <div className={`row ${cx("login-box")}`}>
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className={`py-3 px-2 ${cx("card")}`}>
              <p className="text-center mb-3 mt-2">CONNECT WITH</p>
              <div className={`row ${cx("social-icon")}`}>
                <div className="col-3">
                  <i
                    className={`fab fa-twitter ${cx("fab", "fa-twitter")}`}
                  ></i>
                </div>
                <div className="col-3">
                  <i
                    className={`fab fa-facebook ${cx("fab", "fa-facebook")}`}
                  ></i>
                </div>
                <div className="col-3">
                  <i className={`fab fa-google ${cx("fab", "fa-google")}`}></i>
                </div>
              </div>
              <div className={`row ${cx("division")}`}>
                <div className={`col-3 line l ${cx("line", "l")}`}></div>
                <div className="col-4">
                  <span>OR WITH YOUR EMAIL</span>
                </div>
                <div className={`col-3 line r ${cx("line", "r")}`}></div>
              </div>
              <form
                onSubmit={handleOnSubmit}
                className={`myform ${cx("myform")}`}
              >
                {isError === true && (
                  <div className={cx("message")}>
                    <p>Username Or Password is not VALID !</p>
                  </div>
                )}
                <div className={`form-group ${cx("form-group")}`}>
                  <label htmlFor="username">Username</label>
                  <input
                    ref={inputRef}
                    type="text"
                    className={`form-control ${cx("form-control")}`}
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className={`form-group ${cx("form-group")}`}>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className={`form-control ${cx("form-control")}`}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className={`row ${cx("form-check-box")}`}>
                  <div className="col-md-6 col-12">
                    <div
                      className={`form-group form-check ${cx("form-check")}`}
                    >
                      <input
                        type="checkbox"
                        className={`form-check-input ${cx("form-check-input")}`}
                        id="exampleCheck1"
                      />
                      <label
                        className={`form-check-label ${cx("")}`}
                        htmlFor="exampleCheck1"
                      >
                        Remmember me
                      </label>
                    </div>
                  </div>
                  <div className={`col-md-6 col-12 bn ${cx("bn")}`}>
                    Forgot password
                  </div>
                </div>
                <div className={`form-group mt-3 ${cx("form-group-button")}`}>
                  <button
                    type="submit"
                    className={`btn btn-block btn-primary btn-lg ${cx(
                      "btn-primary"
                    )}`}
                  >
                    <small>
                      <i
                        className={`far fa-user pr-2 ${cx(
                          "far",
                          "fa-user",
                          "pr-2"
                        )}`}
                      ></i>
                      <p>Login</p>
                    </small>
                  </button>
                </div>
                <div className="text-center">
                  <p>
                    Don't have an account yet?{" "}
                    <Link to="/register">Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
