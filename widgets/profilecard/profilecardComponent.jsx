import CreditCards from "./creditcards";
import PersonalDetails from "./personalDetails";
import TransactionDetails from "./transactionDetails";

const ProfileCardComponent = ({
  switchViews,
  handleSwitchViews,
  logout,
  userData,
  cardDetails,
  balance,
  editProfile,
  setEditProfile,
}) => {
  return (
    <>
      <div className="container emp-profile">
        <div>
          <div className="row">
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{userData?.name}</h5>
                <h6>{userData?.type}</h6>
                <p className="proile-rating">
                  Balance : <span>{balance ? balance : "Nill"}</span>
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
              {!editProfile && (
                <button
                  className="btn btn-warning m-1"
                  onClick={() => setEditProfile(true)}
                >
                  Edit
                </button>
              )}
              <button className="btn btn-danger m-1" onClick={logout}>
                logout
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-none d-md-block">
              <CreditCards cardDetails={cardDetails} />
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab m-3" id="myTabContent">
                <PersonalDetails
                  active={switchViews?.about?.detail}
                  userData={userData}
                  editProfile={editProfile}
                  setEditProfile={setEditProfile}
                />
                <TransactionDetails
                  active={switchViews?.transactions?.detail}
                />
              </div>
            </div>
            <div className="col-md-4 d-block d-md-none mt-4 ">
              <CreditCards cardDetails={cardDetails} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileCardComponent;
