import ProfileCardContainer from "../widgets/profilecard/profilecardContainer";
import { getCookies, setCookies, getCookie } from "cookies-next";

export async function getServerSideProps({ req, res }) {
  // console.log(getCookie("test", { req, res }));
  const cookies = getCookies({ req, res });
  const testUser = JSON.parse(cookies.user);
  return {
    props: { user: testUser },
  };
}
const Profile = (props) => {
  return <ProfileCardContainer />;
};

export default Profile;
