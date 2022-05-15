import MyChat from "./mychat";
import OtherChat from "./otherChat";

const ChatComponent = ({ selectedUser, userChat }) => {
  return (
    <>
      {selectedUser ? (
        <div className="chat">
          <div className="chat-header clearfix">
            <div className="row">
              <div className="col-lg-6">
                <a
                  href="javascript:void(0);"
                  data-toggle="modal"
                  data-target="#view_info"
                >
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    alt="avatar"
                  />
                </a>
                <div className="chat-about">
                  <h6 className="m-b-0">{selectedUser?.name}</h6>
                  <small>live : {selectedUser?.lastseen}</small>
                </div>
              </div>
              <div className="col-lg-6 hidden-sm text-right">
                <button className="btn btn-outline-success btn-sm">
                  <img
                    className="img-fluid"
                    src="/icons8-refresh-64.png"
                    alt="refresh"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="chat-history">
            <ul className="m-b-0 chat-scroll-space">
              {userChat && Array.isArray(userChat) && userChat.length > 0
                ? userChat.map((each) => (
                    <>
                    {console.log(each)}
                      {each.me && <MyChat each={each} />}
                      {!each.me && <OtherChat each={each} />}
                    </>
                  ))
                : ""}
              {/* <MyChat /> */}
              {/* <OtherChat /> */}
            </ul>
          </div>
          <div className="chat-message clearfix">
            <div className="input-group mb-0">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount here..."
              />
              <button className="btn btn-outline-secondary">Send Money</button>
              <button className="btn btn-outline-secondary">
                Request Money
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-chat">
          <img src="/multiple-cards-800x600_2.gif" alt="empty" />
        </div>
      )}
    </>
  );
};

export default ChatComponent;
