import CardDetailsComponent from "./cardDetailscomponent";
import creditcardServices from "../../services/creditcardServices";

const CardDetailsContainer = ({
  setShowCardDetails,
  ClickedCardDetails,
  setCardDetails,
}) => {
  const changeCardPriority = async (CardId) => {
    const response = await creditcardServices.prioritizecard(CardId);
    if (response?.data) {
      setCardDetails(response?.data);
    }
  };
  return (
    <>
      <CardDetailsComponent
        setShowCardDetails={setShowCardDetails}
        ClickedCardDetails={ClickedCardDetails}
        changeCardPriority={changeCardPriority}
      />
    </>
  );
};

export default CardDetailsContainer;
