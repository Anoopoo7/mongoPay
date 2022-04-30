import { useRouter } from "next/router";
import FooterContainer from "../widgets/footer/footerContainer";
import NavbarContainer from "../widgets/navbar/navbarContainer";

const LayoutComponent = (props) => {
  const route = useRouter();
  const user = props.userData || {};
  return (
    <>
      <div className="overflow-hidden">
        <NavbarContainer user={user} urlpath={route.pathname} />
        {props.children}
        <FooterContainer />
      </div>
    </>
  );
};

export default LayoutComponent;
