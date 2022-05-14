import ChatComponent from "./chatComponent";

const ChatContainer = ({ selectedUser }) => {
  return (
    <>
      <ChatComponent selectedUser={selectedUser} />
    </>
  );
};

export default ChatContainer;
