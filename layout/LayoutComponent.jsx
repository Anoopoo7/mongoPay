import FooterContainer from "../widgets/footer/footerContainer";
import NavbarContainer from "../widgets/navbar/navbarContainer";

const LayoutComponent = ({ children }) => {
  const { user } = children.props;
  return (
    <>
      <div className="overflow-hidden">
        <NavbarContainer user={user} />
        {children}
        <FooterContainer />
      </div>
    </>
  );
};

export default LayoutComponent;
