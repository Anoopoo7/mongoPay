import ProfileCardContainer from "../widgets/profilecard/profilecardContainer";
import userServices from "../services/userServices";
import sessions from "../https/sessions.json";

export async function getServerSideProps({ req, res }) {
  return {
    props: {},
  };
}
const Profile = (props) => {
  const logout = () => {
    props.clearUserData();
  };
  return <ProfileCardContainer logout={logout} />;
};

export default Profile;
