import MyChat from "./mychat";
import OtherChat from "./otherChat";

const ChatComponent = () => {
  return (
    <>
      <div className="chat">
        <div className="chat-header clearfix">
          <div class="row">
            <div class="col-lg-6">
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
              <div class="chat-about">
                <h6 class="m-b-0">Aiden Chavez</h6>
                <small>Last seen: 2 hours ago</small>
              </div>
            </div>
            <div class="col-lg-6 hidden-sm text-right">
              <button class="btn btn-outline-success btn-sm">
                <img className="img-fluid" src="/icons8-refresh-64.png" alt="refresh" />
              </button>
            </div>
          </div>
        </div>
        <div className="chat-history">
          <ul className="m-b-0 chat-scroll-space">
            <MyChat />
            <OtherChat />
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
            <button className="btn btn-outline-secondary">Request Money</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatComponent;
