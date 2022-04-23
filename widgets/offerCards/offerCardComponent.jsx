import Image from "next/image";

const OfferCardComponent = ({ offerCardList }) => {
  return (
    <div className="container d-flex justify-content-center flex-wrap">
      {offerCardList && Array.isArray(offerCardList)
        ? offerCardList.map((card,index) => (
            <div key={index} className="card m-2" style={{ width: "18rem" }}>
              <div className="container d-flex justify-content-center">
                <Image
                  src="/creditcard.png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.cardText}</p>
                {card.isNavigatable ? (
                  <a href={card.navLink} className="btn btn-success">
                    {card.buttonText}
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default OfferCardComponent;
