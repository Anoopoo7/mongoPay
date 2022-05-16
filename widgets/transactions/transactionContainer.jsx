import TransactionComponent from "./transactionComponent";
import transactionService from "../../services/transactionService";
import { useState, useEffect, useMemo } from "react";

const TransactionContainer = ({ userData }) => {
  const [availableUsers, setAvailableUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userChat, setUserChat] = useState(null);

  const fetchFriendUser = async () => {
    const response = await transactionService.getFriendUsers(userData?.id);
    if (
      response?.data &&
      Array.isArray(response?.data) &&
      response?.data.length > 0
    ) {
      setAvailableUsers(response?.data);
    }
  };
  useEffect(() => {
    fetchFriendUser();
  }, []);

  const searchuser = async (searchTerm) => {
    const response = await transactionService.searchUser(searchTerm);
    if (response?.data && Array.isArray(response?.data)) {
      setAvailableUsers(response.data);
    } else {
      fetchFriendUser();
    }
  };
  const HandleSelectedUSer = (user, laseseen) => {
    user.lastseen = laseseen;
    setSelectedUser(user);
  };

  const getUserMessages = async () => {
    if (selectedUser == null) {
      return;
    }
    const response = await transactionService.geUtserChatByChatId(
      userData?.id + selectedUser?.id
    );
    if (response?.data && Array.isArray(response?.data)) {
      setUserChat(response?.data);
    } else {
      setUserChat(null);
    }
  };
  useMemo(() => {
    getUserMessages();
  }, [selectedUser]);

  const sendmoney = async (amount, recieverId) => {
    if ((recieverId == null) | ((amount | 0) <= 0)) {
      return null;
    }
    const response = await transactionService.sendMoneyByIdsAndAmount(
      userData?.id,
      recieverId,
      amount | 0
    );
    response?.data && getUserMessages();
  };
  const sendRequest = async (amount, recieverId) => {
    if ((recieverId == null) | ((amount | 0) <= 0)) {
      return null;
    }
    const response = await transactionService.SendMoneyReqByIdsAndAmount(
      userData?.id,
      recieverId,
      amount | 0
    );
    response?.data && getUserMessages();
  };
  const handleRequest = async (each, status) => {
    each.status = status;
    const response = await transactionService.handleMoneyReqByIdsAndAmount(
      each
    );
    response?.data && getUserMessages();
  };

  return (
    <>
      <TransactionComponent
        searchuser={searchuser}
        availableUsers={availableUsers}
        setSelectedUser={HandleSelectedUSer}
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

export default TransactionContainer;
