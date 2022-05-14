const PeopleListComponent = ({ searchuser, availableUsers, convertTime }) => {
  console.log(availableUsers);
  return (
    <>
      <div id="plist" className="people-list">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => {
              searchuser(e.target.value);
            }}
          />
        </div>
        <ul className="list-unstyled chat-list mt-2 mb-0">
          {availableUsers &&
          Array.isArray(availableUsers) &&
          availableUsers.length > 0
            ? availableUsers.map((user) => (
                <li className="clearfix">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                    alt="avatar"
                  />
                  <div className="about">
                    <div className="name">{user.name}</div>
                    <div className="status">
                      {" "}
                      <i className="fa fa-circle offline"></i>{" "}
                      {convertTime(user.lastLoggedIn)}
                    </div>
                  </div>
                </li>
              ))
            : "no users found"}
        </ul>
      </div>
    </>
  );
};

export default PeopleListComponent;
