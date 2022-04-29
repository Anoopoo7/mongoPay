import CreditCards from "./creditcards";
import PersonalDetails from "./personalDetails";
import TransactionDetails from "./transactionDetails";

const ProfileCardComponent = ({ switchViews, handleSwitchViews }) => {
  return (
    <>
      <div className="container emp-profile">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Kshiti Ghelani</h5>
                <h6>Web Developer and Designer</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${switchViews?.about?.active}`}
                      id="home-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="home"
                      aria-selected={switchViews?.about?.ariaSelected}
                      onClick={handleSwitchViews}
                    >
                      About
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${switchViews?.transactions?.active}`}
                      id="profile-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="profile"
                      aria-selected={switchViews?.transactions?.ariaSelected}
                      onClick={handleSwitchViews}
                    >
                      Transactions
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 ml-auto">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <CreditCards />
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <PersonalDetails active={switchViews?.about?.detail} />
                <TransactionDetails
                  active={switchViews?.transactions?.detail}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCardComponent;
