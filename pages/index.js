import Head from "next/head";
import AddContainer from "../widgets/addsection/addcontainer";
import HeroContainer from "../widgets/herosection/heroContainer";
import MongoRankContainer from "../widgets/mongorank/mongoRankContainer";
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
  const heritage = {
    tittle: "Heritage Money",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ullam nulla totam provident aut aperiam, omnis rerum vel tempora inventore reiciendis praesentium rem quis eligendi accusantium vitae ducimus. Dolor, aspernatur assumenda praesentium",
    image: "image.jsp",
  };
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

export default function Home({ user, herosection, offersection, heritage, rankup }) {
  return (
    <div className="row">
      <div className="container">
        <HeroContainer herosection={herosection} />{" "}
        <OfferCardContainer offersection={offersection} />{" "}
        <AddContainer heritage={heritage} />
        <MongoRankContainer rankup={rankup} />
      </div>{" "}
    </div>
  );
}
