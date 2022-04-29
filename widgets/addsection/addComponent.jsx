const AddComponent = ({ heritage }) => {
  return (
    <>
      <div className="container pt-5 pb-5">
        {heritage &&
          Array.isArray(heritage) &&
          heritage.map((each) => (
            <div className="row" key={each.id}>
              <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column text-justify">
                <h1 className="text-heading text-center">{each.addTitle}</h1>
                <hr />
                <p>{each.addDescription}</p>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <img
                  src="/okcanimationn800.gif"
                  alt="Picture of the author"
                  className="img-fluid"
                />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AddComponent;
