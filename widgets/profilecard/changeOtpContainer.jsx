import { useState } from "react";
import ChangeOtpComponent from "./changeOtpComponent";
import creditcardServices from "../../services/creditcardServices";

const ChangeOtpContainer = ({ ClickedCardDetails }) => {
  const [showForm, setShowForm] = useState(false);
  const changeOptRequest = async (oldOTP, newOTP) => {
    if (
      oldOTP?.length === 4 &&
      newOTP?.length === 4 &&
      oldOTP !== newOTP &&
      ClickedCardDetails?.id
    ) {
      const response = await creditcardServices.changeOtp(
        ClickedCardDetails?.id,
        oldOTP,
        newOTP
      );
      alert(response?.data);
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      <ChangeOtpComponent
        showForm={showForm}
        setShowForm={setShowForm}
        changeOptRequest={changeOptRequest}
      />
    </>
  );
};

export default ChangeOtpContainer;
