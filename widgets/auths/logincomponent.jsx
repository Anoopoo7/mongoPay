import { useRef } from "react";

const LoginComponent = ({ loginHandle, message }) => {
  const email = useRef(null);
  const password = useRef(null);
  const handleClick = () => {
    loginHandle(email.current.value, password.current.value);
  };
  return (
    <>
      <div>
        <div className="input-group mb-3">
          <div className="input-group-append">
            <span className="input-group-text" />
          </div>
          <input
            type="text"
            id="email"
            ref={email}
            className="form-control input_user"
            placeholder="email"
          />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text" />
          </div>
          <input
            type="password"
            id="password"
            ref={password}
            className="form-control input_pass"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlInline"
            />
            <label
              className="custom-control-label"
              htmlFor="customControlInline"
            >
              Remember me
            </label>
          </div>
        </div>
        <h6 className="text-center text-danger">
          {message}
        </h6>
        <div className="d-flex justify-content-center mt-3 login_container">
          <button
            type="button"
            id="button"
            className="btn login_btn"
            onClick={handleClick}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
