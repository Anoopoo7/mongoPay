import Head from "next/head";
import HeroContainer from "../widgets/herosection/heroContainer";
import NavbarContainer from "../widgets/navbar/navbarContainer";
import OfferCardContainer from "../widgets/offerCards/offerCardContainer";

export async function getServerSideProps(context) {
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
  const herosection = {
    img: "image_creditcard",
    text: "Future Money Is HERE",
  };
  const offersection = [
    {
      img: "image",
      title: "card tittle",
      cardText:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      isNavigatable: true,
      navLink: "#",
      buttonText: "explore",
    },
    {
      img: "image",
      title: "card tittle",
      cardText:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      isNavigatable: true,
      navLink: "#",
      buttonText: "explore",
    },
    {
      img: "image",
      title: "card tittle",
      cardText:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      isNavigatable: true,
      navLink: "#",
      buttonText: "explore",
    },
  ];
  return {
    props: { user: testUser || {}, herosection, offersection },
  };
}

export default function Home({ user, herosection, offersection }) {
  return (
    <div className="row">
      <div className="container">
        <NavbarContainer user={user} />
        <HeroContainer herosection={herosection} />
        <OfferCardContainer offersection={offersection} />
      </div>
    </div>
  );
}
