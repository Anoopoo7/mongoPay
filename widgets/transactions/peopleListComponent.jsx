const PeopleListComponent = () => {
  return (
    <>
      <div id="plist" className="people-list">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <ul className="list-unstyled chat-list mt-2 mb-0">
          <li className="clearfix">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar1.png"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Vincent Porter</div>
              <div className="status">
                {" "}
                <i className="fa fa-circle offline"></i> left 7 mins ago{" "}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PeopleListComponent;
