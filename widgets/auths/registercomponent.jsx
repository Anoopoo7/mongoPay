const RegisterComponent = () => {
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
            className="form-control input_pass"
            placeholder="confirm password"
          />
        </div>

        <div className="d-flex justify-content-center mt-3 login_container">
          <button type="button" id="button" className="btn login_btn">
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default RegisterComponent;
