import AddContainer from "../widgets/addsection/addcontainer";
import HeroContainer from "../widgets/herosection/heroContainer";
import MongoRankContainer from "../widgets/mongorank/mongoRankContainer";
import OfferCardContainer from "../widgets/offerCards/offerCardContainer";
import contents from "../services/contentService";

export async function getServerSideProps({ req, res }) {
  const data = await contents.getHomepageContents();
  const homecontents = data.data;
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
    props: {herosection, offersection, heritage, rankup },
  };
}

export default function Home({
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
