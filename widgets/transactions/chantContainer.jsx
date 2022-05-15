import ChatComponent from "./chatComponent";

const ChatContainer = ({
  selectedUser,
  userChat,
  sendmoney,
  getUserMessages,
}) => {
  return (
    <>
      <ChatComponent
        selectedUser={selectedUser}
        userChat={userChat}
        sendmoney={sendmoney}
        getUserMessages={getUserMessages}
      />
    </>
  );
};

export default ChatContainer;
