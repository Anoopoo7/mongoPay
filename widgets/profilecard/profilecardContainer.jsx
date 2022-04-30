import { useState } from "react";
import ProfileCardComponent from "./profilecardComponent";
import { useRouter } from "next/router";

const ProfileCardContainer = ({ logout }) => {
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
  return (
    <ProfileCardComponent
      switchViews={switchViews}
      handleSwitchViews={handleSwitchViews}
      logout={logout}
    />
  );
};

export default ProfileCardContainer;
