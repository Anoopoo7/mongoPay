import AddContainer from "../widgets/addsection/addcontainer";
import HeroContainer from "../widgets/herosection/heroContainer";
import MongoRankContainer from "../widgets/mongorank/mongoRankContainer";
import OfferCardContainer from "../widgets/offerCards/offerCardContainer";
import { getCookies, setCookies, getCookie } from "cookies-next";
import contents from "../services/contentService";

export async function getServerSideProps({ req, res }) {
  const data = await contents.getHomepageContents();
  const homecontents = data.data;
  const testUser = {
    loggedIn: true,
    name: "anoop",
    userId: "MONGOUSER001",
    roles: "admin",
    card: "Federal bank",
    cardNumber: "6085 4093 8792 1209",
    transctionId: "TRANS001MONGOYLSQR0932",
    loans: null,
  };
  setCookies("user", JSON.stringify(testUser), { req, res, maxAge: 60 * 6 * 24 });

  const herosection = {
    img: homecontents.headerImg,
    text: homecontents.headingTitle,
    navigation: homecontents.isheadingEnabled,
    buttonText: homecontents.headingButtonText,
    buttonLink: homecontents.headingButtonLOffercardink,
  };
  const offersection = homecontents.offerCards;
  const heritage = homecontents.advertisements;
  const rankup = [
    {
      name: "anoop",
      payed: 1600,
      gifted: 500,
    },
    {
      name: "vaiga",
      payed: 1500,
      gifted: 450,
    },
    {
      name: "jafer",
      payed: 1400,
      gifted: 400,
    },
    {
      name: "rahul",
      payed: 1300,
      gifted: 300,
    },
    {
      name: "saleena",
      payed: 1000,
      gifted: 100,
    },
    {
      name: "arun",
      payed: 900,
      gifted: 90,
    },
  ];
  return {
    props: { user: testUser, herosection, offersection, heritage, rankup },
  };
}

export default function Home({
  user,
  herosection,
  offersection,
  heritage,
  rankup,
}) {
  return (
    <div className="row">
      <div className="container">
        <HeroContainer herosection={herosection || {}} />{" "}
        <OfferCardContainer offersection={offersection || []} />{" "}
        <AddContainer heritage={heritage || []} />{" "}
        <MongoRankContainer rankup={rankup || []} />{" "}
      </div>{" "}
    </div>
  );
}
