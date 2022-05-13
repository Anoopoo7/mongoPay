import BankRequestComponent from "./bankreRuestComponent";
import bankServices from "../../services/bankServices";
import { useState, useEffect } from "react";

const BankReqContainer = ({ handlebankRequset }) => {
  const [banks, setBanks] = useState([]);
  const banknameFetching = async () => {
    const response = await bankServices.getBankNames();
    setBanks(response?.data || []);
  };
  useEffect(() => {
    banknameFetching();
  }, []);
  const bankRequest = async (username, email, bankId) => {
    const response = await bankServices.sendBankRequest(
      username,
      email,
      bankId
    );
    if (response?.data) {
      alert(response?.data);
      handlebankRequset();
    }
  };
  return (
    <>
      <BankRequestComponent
        handlebankRequset={handlebankRequset}
        banks={banks}
        bankRequest={bankRequest}
      />
    </>
  );
};

export default BankReqContainer;
