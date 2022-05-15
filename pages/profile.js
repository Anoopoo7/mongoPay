import ProfileCardContainer from "../widgets/profilecard/profilecardContainer";
import userServices from "../services/userServices";
import Router from "next/router";

export async function getServerSideProps({ req, res }) {
    return {
        props: {},
    };
}
const Profile = (props) => {
    if (!props ?.userData ?.active) {
        Router.push({
                pathname: "/auth",
            },
            undefined, { shallow: true }
        );
    }
    const logout = () => {
        props.clearUserData();
        Router.push({
                pathname: "/auth",
            },
            undefined, { shallow: true }
        );
    };
    return ( <
        ProfileCardContainer logout = { logout }
        userData = { props.userData }
        setUserdata = { props.setUserdata }
        />
    );
};

export default Profile;