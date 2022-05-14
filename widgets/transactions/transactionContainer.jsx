import TransactionComponent from "./transactionComponent";
import transactionService from "../../services/transactionService";
import { useState } from "react";

const TransactionContainer = ({ userData }) => {
  const [availableUsers, setAvailableUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const searchuser = async (searchTerm) => {
    const response = await transactionService.searchUser(searchTerm);
    if (
      response?.data &&
      Array.isArray(response?.data) &&
      response.data.length > 0
    ) {
      setAvailableUsers(response.data);
    } else {
      setAvailableUsers([]);
    }
  };
  const HandleSelectedUSer = (user, laseseen) => {
    user.lastseen = laseseen;
    setSelectedUser(user);
  };
  return (
    <>
      <TransactionComponent
        searchuser={searchuser}
        availableUsers={availableUsers}
        setSelectedUser={HandleSelectedUSer}
        selectedUser={selectedUser}
      />
    </>
  );
};

export default TransactionContainer;
