import Image from "next/image";

const AddComponent = ({ heritage }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-center flex-column text-justify">
            <h1>
              <b> {heritage.tittle} </b>
            </h1>
            <hr />
            <p>{heritage.description}</p>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Image
              src="/okcanimationn800.gif"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddComponent;
