import { useState, useEffect } from "react";
import ProfileCardComponent from "./profilecardComponent";
import { useRouter } from "next/router";

const ProfileCardContainer = ({ logout, userData }) => {
  const router = useRouter();
  const [switchViews, setSwitchViews] = useState({
    about: {
      active: "active",
      ariaSelected: true,
      detail: "active show",
    },
    transactions: {
      active: "",
      ariaSelected: false,
      detail: "",
    },
  });
  const [cardDetails, setCardDetails] = useState(null);
  const handleSwitchViews = () => {
    if (switchViews.about.ariaSelected) {
      setSwitchViews({
        transactions: {
          active: "active",
          ariaSelected: true,
          detail: "active show",
        },
        about: {
          active: "",
          ariaSelected: false,
          detail: "",
        },
      });
      return;
    }
    setSwitchViews({
      about: {
        active: "active",
        ariaSelected: true,
        detail: "active show",
      },
      transactions: {
        active: "",
        ariaSelected: false,
        detail: "",
      },
    });
  };
  useEffect(() => {
    setCardDetails([
      {
        id: "0000000",
        cardHolderID: "CADUSR1000000",
        cardName: "HDFC",
        cardType: "silver",
        bankIdentity: "HDFC00000000",
        cardNumber: "7874564332654607",
        balance: 50000,
        minimumBalance: 1000,
        isFirstUse: true,
        actionId: null,
        active: true,
        enabled: true,
      },
      {
        id: "0000001",
        cardHolderID: "CADUSR1000001",
        cardName: "AXIS",
        cardType: "Gold",
        bankIdentity: "AXIS00000000",
        cardNumber: "7874564332654000",
        balance: 30000,
        minimumBalance: 1500,
        isFirstUse: true,
        actionId: null,
        active: true,
        enabled: true,
      },
    ]);
  }, [userData]);
  return (
    <ProfileCardComponent
      switchViews={switchViews}
      handleSwitchViews={handleSwitchViews}
      logout={logout}
      userData={userData}
      cardDetails={cardDetails}
    />
  );
};

export default ProfileCardContainer;
