import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import LayoutComponent from "../layout/LayoutComponent";
import { useState, useEffect } from "react";
import GlobalLoader from "../layout/loader";

function MyApp({ Component, pageProps }) {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);

  const clearUserData = () => {
    setUserData({});
  };
  const setUserdata = (data) => {
    setUserData(data);
  };

  return (
    <LayoutComponent userData={userData}>
      {loading ? (
        <GlobalLoader />
      ) : (
        <Component
          {...pageProps}
          userData={userData}
          clearUserData={clearUserData}
          setUserdata={setUserdata}
        />
      )}
    </LayoutComponent>
  );
}

export default MyApp;
