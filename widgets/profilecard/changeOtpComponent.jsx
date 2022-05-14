import { useRef } from "react";

const ChangeOtpComponent = ({ showForm, setShowForm, changeOptRequest }) => {
  const oldOTP = useRef(null);
  const newOTP = useRef(null);
  const handleSubmit = () => {
    changeOptRequest(
      oldOTP?.current?.value || null,
      newOTP?.current?.value || null
    );
  };
  return (
    <>
      {!showForm && (
        <tr>
          <td className="text-secondary">change OTP</td>
          <td>
            <button
              className="btn btn-secondary btn-sm form-control mb-1"
              onClick={() => setShowForm(true)}
            >
              Change
            </button>
          </td>
        </tr>
      )}
      {showForm && (
        <>
          <tr>
            <td className="text-secondary">Old OTP</td>
            <td>
              <input
                type="password"
                className="form-control"
                maxLength={4}
                id="0ldOtp"
                ref={oldOTP}
              />
            </td>
          </tr>
          <tr>
            <td className="text-secondary">New OTP</td>
            <td>
              <input
                type="password"
                className="form-control"
                maxLength={4}
                id="newOTP"
                ref={newOTP}
              />
            </td>
          </tr>
          <tr>
            <td className="text-secondary"></td>
            <button
              className="btn btn-secondary form-control mb-1"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </tr>
        </>
      )}
    </>
  );
};

export default ChangeOtpComponent;
