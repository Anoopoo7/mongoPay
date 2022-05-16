import ChatComponent from "./chatComponent";

const ChatContainer = ({
  selectedUser,
  userChat,
  sendmoney,
  getUserMessages,
  sendRequest,
  handleRequest,
}) => {
  return (
    <>
      <ChatComponent
        selectedUser={selectedUser}
        userChat={userChat}
        sendmoney={sendmoney}
        getUserMessages={getUserMessages}
        sendRequest={sendRequest}
        handleRequest={handleRequest}
      />
    </>
  );
};

export default ChatContainer;
