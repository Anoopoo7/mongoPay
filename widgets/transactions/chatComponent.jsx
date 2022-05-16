import MyChat from "./mychat";
import OtherChat from "./otherChat";
import { useRef, useEffect } from "react";

const ChatComponent = ({
  selectedUser,
  userChat,
  sendmoney,
  getUserMessages,
  sendRequest,
  handleRequest,
}) => {
  const amound = useRef(null);
  const handleSendMoney = () => {
    const amounds = amound.current.value;
    sendmoney(amounds, selectedUser?.id);
    amound.current.value = "";
  };
  const handleSendRequest = () => {
    const amounds = amound.current.value;
    sendRequest(amounds, selectedUser?.id);
    amound.current.value = "";
  };
  useEffect(() => {
    let scroller = document?.getElementById("scroller");
    scroller?.scrollTo(0, scroller?.scrollHeight);
  }, [userChat]);
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
                    onClick={getUserMessages}
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="chat-history">
            <ul className="m-b-0 chat-scroll-space" id="scroller">
              {userChat && Array.isArray(userChat) && userChat.length > 0
                ? userChat.map((each, index) => (
                    <>
                      {each.me && <MyChat each={each} />}
                      {!each.me && (
                        <OtherChat each={each} handleRequest={handleRequest} />
                      )}
                    </>
                  ))
                : ""}
            </ul>
          </div>
          <div className="chat-message clearfix">
            <div className="input-group mb-0">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Amount here..."
                ref={amound}
              />
              <button
                className="btn btn-outline-secondary"
                onClick={handleSendMoney}
              >
                Send Money
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={handleSendRequest}
              >
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
