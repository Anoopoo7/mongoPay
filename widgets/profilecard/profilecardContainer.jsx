import { useState, useEffect } from "react";
import ProfileCardComponent from "./profilecardComponent";
import { useRouter } from "next/router";
import userServices from "../../services/userServices";

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
  const [cardDetails, setCardDetails] = useState({});
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
    if (userData) {
      const getCards = async () => {
        const response = await userServices.getUserCards(
          userData.email,
          userData.cardHolderId
        );
        if (
          response?.data &&
          Array.isArray(response?.data) &&
          response?.data.length > 0
        ) {
          setCardDetails(response.data);
        }
      };
      getCards();
    }
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
