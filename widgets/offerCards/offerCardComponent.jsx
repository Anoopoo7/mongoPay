import Image from "next/image";

const OfferCardComponent = ({ offerCardList }) => {
  return (
    <div className="container d-flex justify-content-center flex-wrap pb-5 pt-5">
      {offerCardList && Array.isArray(offerCardList)
        ? offerCardList.map((card, index) => (
            <div key={index} className="card m-2" style={{ width: "18rem" }}>
              <div className="container d-flex justify-content-center">
                <Image
                  src="/creditcard.png"
                  alt={card.offerTitle}
                  width={100}
                  height={100}
                  title={card.offerTitle}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{card.offerTitle}</h5>
                <p className="card-text">{card.offerDescription}</p>
                {card.offerButtonEnabled ? (
                  <a href={card.offerButtonLink} className="btn btn-success">
                    {card.offerButtonText}
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
