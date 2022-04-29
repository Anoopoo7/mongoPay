import { useRouter } from "next/router";
import FooterContainer from "../widgets/footer/footerContainer";
import NavbarContainer from "../widgets/navbar/navbarContainer";

const LayoutComponent = ({ children }) => {
  const route = useRouter();
  const { user } = children.props;
  return (
    <>
      <div className="overflow-hidden">
        <NavbarContainer user={user} urlpath={route.pathname} />
        {children}
        <FooterContainer />
      </div>
    </>
  );
};

export default LayoutComponent;
