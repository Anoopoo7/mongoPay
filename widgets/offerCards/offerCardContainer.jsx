import { useState } from "react";
import OfferCardComponent from "./offerCardComponent";

const OfferCardContainer = ({ offersection }) => {
  const [offerCardList, setOfferCardList] = useState({});
  useState(() => {
    setOfferCardList(offersection);
  }, [offersection]);
  return <OfferCardComponent offerCardList={offerCardList} />;
};

export default OfferCardContainer;
