const AddComponent = ({ heritage }) => {
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column text-justify">
            <h1>
              <b> {heritage.tittle} </b>
            </h1>
            <hr />
            <p>{heritage.description}</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img
              src="/okcanimationn800.gif"
              alt="Picture of the author"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
