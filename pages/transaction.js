import { useEffect } from "react";
import TransactionContainer from "../widgets/transactions/transactionContainer";
import Router from "next/router";

const Transaction = ({ userData }) => {
  useEffect(() => {
    if (!userData?.active) {
      Router.push(
        {
          pathname: "/auth",
        },
        undefined,
        { shallow: true }
      );
    }
  }, [userData]);
  return <TransactionContainer userData={userData} />;
};

export default Transaction;
