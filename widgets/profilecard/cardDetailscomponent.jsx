import ChangeOtpContainer from "./changeOtpContainer";

const CardDetailsComponent = ({
  setShowCardDetails,
  ClickedCardDetails,
  changeCardPriority,
}) => {
  return (
    <>
      {ClickedCardDetails ? (
        <>
          <div
            id="myModal"
            className="modal fade show"
            aria-modal="true"
            style={{ display: "block" }}
          >
            <div className="modal-dialog modal-login">
              <div className="modal-content">
                <div className="modal-header">
                  <br />
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-hidden="true"
                    onClick={() => setShowCardDetails(false)}
                  >
                    ×
                  </button>
                </div>
                <div className="modal-body">
                  <div className="container p-5">
                    <h5>{ClickedCardDetails?.cardName}</h5>
                    <b>
                      {ClickedCardDetails?.cardNumber?.slice(0, 4) +
                        " " +
                        ClickedCardDetails?.cardNumber?.slice(4, 8) +
                        " " +
                        ClickedCardDetails?.cardNumber?.slice(8, 12) +
                        " " +
                        ClickedCardDetails?.cardNumber?.slice(12, 16)}
                    </b>
                    <br />
                    <br />
                    <table>
                      <tr>
                        <td>
                          <span className="text-secondary">Card Type</span>
                        </td>
                        <td>: {ClickedCardDetails?.cardType}</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-secondary">
                            current Balanace
                          </span>
                        </td>
                        <td>: {ClickedCardDetails?.balance}</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-secondary">maximum amound</span>
                        </td>
                        <td>: {ClickedCardDetails?.maximumBalance}</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="text-secondary">minimum amound</span>
                        </td>
                        <td>: {ClickedCardDetails?.minimumBalance}</td>
                      </tr>
                      <ChangeOtpContainer
                        ClickedCardDetails={ClickedCardDetails}
                      />
                    </table>
                    <li className="list-group-item rounded d-flex d-md-block">
                      Make it Primary Card
                      <label className="switch">
                        <input
                          type="checkbox"
                          className="success"
                          defaultChecked={ClickedCardDetails?.primaryCard}
                          onChange={() =>
                            changeCardPriority(ClickedCardDetails.id)
                          }
                          disabled={ClickedCardDetails?.primaryCard}
                        />
                        <span className="slider round"></span>
                      </label>
                    </li>
                  </div>
                  <div className="form-group container p-4">
                    <button className="btn btn-outline-success btn-lg btn-block login-btn">
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      ) : (
        "Nothing here"
      )}
    </>
  );
};

export default CardDetailsComponent;
