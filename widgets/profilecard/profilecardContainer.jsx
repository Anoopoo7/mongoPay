import { useState, useMemo } from "react";
import ProfileCardComponent from "./profilecardComponent";
import { useRouter } from "next/router";
import userServices from "../../services/userServices";

const ProfileCardContainer = ({ logout, userData }) => {
  const router = useRouter();
  const [cardDetails, setCardDetails] = useState({});
  const [balance, setBalance] = useState(null);
  const [editProfile, setEditProfile] = useState(false);
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
  useMemo(() => {
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
          var balance = 0;
          response.data.forEach((card) => {
            balance += card.balance | 0;
          });
          setBalance(balance);
          console.log(balance);
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
      balance={balance}
      editProfile={editProfile}
      setEditProfile={setEditProfile}
    />
  );
};

export default ProfileCardContainer;
