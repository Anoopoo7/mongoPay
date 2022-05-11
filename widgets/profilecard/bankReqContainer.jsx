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
  return (
    <>
      <BankRequestComponent
        handlebankRequset={handlebankRequset}
        banks={banks}
      />
    </>
  );
};

export default BankReqContainer;
