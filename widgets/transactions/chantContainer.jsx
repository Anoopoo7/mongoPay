import ChatComponent from "./chatComponent";

const ChatContainer = ({
  selectedUser,
  userChat,
  sendmoney,
  getUserMessages,
  sendRequest,
}) => {
  return (
    <>
      <ChatComponent
        selectedUser={selectedUser}
        userChat={userChat}
        sendmoney={sendmoney}
        getUserMessages={getUserMessages}
        sendRequest={sendRequest}
      />
    </>
  );
};

export default ChatContainer;
