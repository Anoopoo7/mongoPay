import { useState } from "react";
import ProfileCardComponent from "./profilecardComponent";

const ProfileCardContainer = () => {
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
    />
  );
};

export default ProfileCardContainer;
