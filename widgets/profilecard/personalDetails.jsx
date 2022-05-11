import { useRef } from "react";

const PersonalDetails = ({
  active,
  userData,
  editProfile,
  setEditProfile,
  editProfileDataHandler,
}) => {
  const id = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const handleEdit = () => {
    editProfileDataHandler(
      id.current.value,
      name.current.value,
      email.current.value,
      phone.current.value
    );
  };
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
            {!editProfile && <p>{userData?.id}</p>}
            {editProfile && (
              <input
                type="text"
                className="form-control m-1"
                disabled
                defaultValue={userData.id}
                ref={id}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Name</label>
          </div>
          <div className="col-md-6">
            {!editProfile && <p>{userData.name}</p>}
            {editProfile && (
              <input
                type="text"
                className="form-control m-1"
                defaultValue={userData.name}
                ref={name}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Email</label>
          </div>
          <div className="col-md-6">
            {!editProfile && <p>{userData.email}</p>}
            {editProfile && (
              <input
                type="text"
                className="form-control m-1"
                defaultValue={userData.email}
                ref={email}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Phone</label>
          </div>
          <div className="col-md-6">
            {!editProfile && <p>{userData.phoneNumber}</p>}
            {editProfile && (
              <input
                type="text"
                className="form-control m-1"
                defaultValue={userData.phoneNumber}
                ref={phone}
              />
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label>Type of account</label>
          </div>
          <div className="col-md-6">
            {!editProfile && <p>{userData?.type?.toLowerCase()}</p>}
            {editProfile && (
              <input
                type="text"
                disabled
                className="form-control m-1"
                defaultValue={userData?.type?.toLowerCase()}
              />
            )}
          </div>
        </div>
        {editProfile && (
          <>
            <button
              className="btn btn-outline-success mt-3"
              onClick={() => setEditProfile(false)}
            >
              {" "}
              cancel
            </button>
            <button className="btn btn-success mt-3 ml-3" onClick={handleEdit}>
              {" "}
              submit
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
