import TransactionComponent from "./transactionComponent";
import transactionService from "../../services/transactionService";
import { useState } from "react";

const TransactionContainer = ({ userData }) => {
  const [availableUsers, setAvailableUsers] = useState([]);
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
  return (
    <>
      <TransactionComponent
        searchuser={searchuser}
        availableUsers={availableUsers}
      />
    </>
  );
};

export default TransactionContainer;
