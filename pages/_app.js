import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import LayoutComponent from "../layout/LayoutComponent";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState({
    id: "6269a5a5a2491b6c08a599fe",
    type: "CUSTOMER",
    email: "testuser00@gmail.com",
    name: "testuser 00",
    password: "testuser_0@123",
    phoneNumber: "9000000000",
    cardHolderId: "CADUSR1000000",
    paymentHistoryId: "PAYUSR1000000000",
    active: true,
    enabled: true,
    lastLoggedIn: "2022-04-30T13:27:48.682+00:00",
    rank: null,
    actionId: "ACTUSR1000000",
    firstlogin: true,
  });
  const clearUserData = () => {
    setUserData({});
  };

  return (
    <LayoutComponent userData={userData}>
      <Component
        {...pageProps}
        userData={userData}
        clearUserData={clearUserData}
      />
    </LayoutComponent>
  );
}

export default MyApp;
