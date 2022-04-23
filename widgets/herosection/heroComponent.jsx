// import Image from "next/image";

const HeroComponent = ({ heropageContents }) => {
  return (
    <>
      <div className="container d-flex justify-content-center pt-5 pb-5">
        {/* <Image
          src="/hero.gif"
          alt="Picture of the author"
          width={500}
          height={500}
        /> */}
        <img
          src="/hero.gif"
          alt="Picture of the author"
          className="img-fluid"
        />
      </div>
      <div className="container d-flex justify-content-center">
        <h1 className="text-center text-heading">{heropageContents?.text}</h1>
      </div>
      <div className="container d-flex justify-content-center p-4">
        <button type="button" className="btn btn-success p-2 pl-5 pr-5">
          Get Starts
        </button>
      </div>
    </>
  );
};

export default HeroComponent;
