import { useState } from "react";
import BankReqContainer from "./bankReqContainer";

const CreditCards = ({ cardDetails }) => {
  const [showBankReq, setShowbankReq] = useState(false);
  const handlebankRequset = () => {
    setShowbankReq(!showBankReq);
  };
  return (
    <>
      {showBankReq && (
        <BankReqContainer handlebankRequset={handlebankRequset} />
      )}
      <div className="profile-work">
        <p>CARD DETAILS</p>
        {cardDetails && Array.isArray(cardDetails) && cardDetails.length > 0 ? (
          cardDetails.map((each) => (
            <div key={each.id}>
              <div className="card p-3 m-1 pointer">
                <b>{each.cardName}</b>
                <b>
                  {each?.cardNumber?.slice(0, 4) +
                    " " +
                    each?.cardNumber?.slice(4, 8) +
                    " " +
                    each?.cardNumber?.slice(8, 12) +
                    " " +
                    each?.cardNumber?.slice(12, 16)}
                </b>
                <span>Balance: {each.balance}</span>
              </div>
            </div>
          ))
        ) : (
          <>
            <small className="text-warning">No cards found !</small>
            <br />
            <small className="text-secondary">
              you can request for a new card in any of the Bank you wish, after
              checking your profile, bank will provide you card
            </small>
            <br />
            <br />
          </>
        )}
        <button
          className="btn btn-sm btn-warning m-1"
          onClick={handlebankRequset}
        >
          Get More Cards
        </button>
      </div>
    </>
  );
};

export default CreditCards;
