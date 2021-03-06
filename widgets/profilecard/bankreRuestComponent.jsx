import { useRef } from "react";

const BankRequestComponent = ({ handlebankRequset, banks, bankRequest }) => {
  const username = useRef(null);
  const email = useRef(null);
  const bankId = useRef(null);
  const handleSubmit = () => {
    bankRequest(
      username.current.value,
      email.current.value,
      bankId.current.value
    );
  };
  return (
    <>
      <div
        id="myModal"
        class="modal fade show"
        aria-modal="true"
        style={{ display: "block" }}
      >
        <div class="modal-dialog modal-login">
          <div class="modal-content">
            <div class="modal-header">
              <div class="avatar">
                <img
                  src="/im-338004.gif"
                  className="img img-fluid"
                  alt="Avatar"
                />
              </div>
              <br />
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
                onClick={handlebankRequset}
              >
                ×
              </button>
            </div>
            <div class="modal-body">
              <div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    placeholder="Username"
                    required="required"
                    ref={username}
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="email"
                    required="required"
                    ref={email}
                  />
                </div>
                <div class="form-group">
                  <select name="Bank" ref={bankId} class="form-control">
                    <option value="null">Choose Bank</option>
                    {banks.map((each) => (
                      <option key={each.id} value={each.id}>
                        {each.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-primary btn-lg btn-block login-btn"
                    onClick={handleSubmit}
                  >
                    Send Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show"></div>
    </>
  );
};

export default BankRequestComponent;
