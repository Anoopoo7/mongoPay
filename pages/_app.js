import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import LayoutComponent from "../layout/LayoutComponent";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}

export default MyApp;
