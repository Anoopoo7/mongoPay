import LoginComponent from "./logincomponent";
import RegisterComponent from "./registercomponent";

const AuthComponent = ({
  login,
  handleLoggingToggler,
  loginHandle,
  message,
  registerHandle,
}) => {
  return (
    <>
      <div className="outer-80">
        <div className="container h-100">
          <div className="d-flex justify-content-center h-100">
            <div className="user_card">
              <div className="d-flex justify-content-center">
                <div className="brand_logo_container">
                  <img
                    src="https://media.istockphoto.com/vectors/plastic-debit-or-credit-card-with-a-payment-approved-icon-vector-id1192236478?k=20&m=1192236478&s=612x612&w=0&h=b8GGcl2n3lyH2ovGGOMkyRG17-qLH8gSG9xKfQvSPWI="
                    className="brand_logo"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center form_container">
                {login ? (
                  <LoginComponent loginHandle={loginHandle} message={message} />
                ) : (
                  <RegisterComponent
                    registerHandle={registerHandle}
                    message={message}
                  />
                )}
              </div>

              <div className="mt-4">
                {login ? (
                  <>
                    <div className="d-flex justify-content-center links">
                      Don't have an account?{" "}
                      <a className="ml-2" onClick={handleLoggingToggler}>
                        Sign Up
                      </a>
                    </div>
                    <div className="d-flex justify-content-center links">
                      <a>Forgot your password?</a>
                    </div>
                  </>
                ) : (
                  <div className="d-flex justify-content-center links">
                    already have an account?{" "}
                    <a className="ml-2" onClick={handleLoggingToggler}>
                      Sign In
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthComponent;
