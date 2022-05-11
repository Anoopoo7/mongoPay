import { useRef } from "react";

const RegisterComponent = ({ registerHandle, message }) => {
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const Cpassword = useRef(null);
  const handleClick = () => {
    registerHandle(
      name.current.value,
      email.current.value,
      phone.current.value,
      password.current.value,
      Cpassword.current.value
    );
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
            id="name"
            ref={name}
            className="form-control input_user"
            placeholder="name"
          />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text" />
          </div>
          <input
            type="email"
            id="email"
            ref={email}
            className="form-control input_pass"
            placeholder="email"
          />
        </div>
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text" />
          </div>
          <input
            type="number"
            id="phone"
            ref={phone}
            className="form-control input_pass"
            placeholder="phone"
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
        <div className="input-group mb-2">
          <div className="input-group-append">
            <span className="input-group-text" />
          </div>
          <input
            type="password"
            id="Cpassword"
            ref={Cpassword}
            className="form-control input_pass"
            placeholder="confirm password"
          />
        </div>
        <h6 className="text-center text-danger">{message}</h6>

        <div className="d-flex justify-content-center mt-3 login_container">
          <button
            type="button"
            id="button"
            className="btn login_btn"
            onClick={handleClick}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
