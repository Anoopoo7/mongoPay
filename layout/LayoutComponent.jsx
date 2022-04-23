import FooterContainer from "../widgets/footer/footerContainer";
import NavbarContainer from "../widgets/navbar/navbarContainer";

const LayoutComponent = ({ children }) => {
  const { user } = children.props;
  return (
    <>
      <NavbarContainer user={user} />
      {children}
      <FooterContainer />
    </>
  );
};

export default LayoutComponent;
