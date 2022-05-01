const PersonalDetails = ({ active, userData }) => {
  return (
    <>
      <div
        className={`tab-pane fade ${active}`}
        id="home"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <div className="row">
          <div className="col-md-6">
            <label>User Id</label>
          </div>
          <div className="col-md-6">
            <p>{userData?.id}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
          </div>
          <div className="col-md-6">
            <p>{userData.name}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            <p>{userData?.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Phone</label>
          </div>
          <div className="col-md-6">
            <p>{userData?.phoneNumber}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Type of account</label>
          </div>
          <div className="col-md-6">
            <p>{userData?.type?.toLowerCase()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalDetails;
