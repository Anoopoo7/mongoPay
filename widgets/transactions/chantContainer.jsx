import ChatComponent from "./chatComponent";

const ChatContainer = ({ selectedUser, userChat }) => {
  return (
    <>
      <ChatComponent selectedUser={selectedUser} userChat={userChat} />
    </>
  );
};

export default ChatContainer;
