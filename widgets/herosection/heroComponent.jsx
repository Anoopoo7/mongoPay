import Image from "next/image";

const HeroComponent = ({ heropageContents }) => {
  console.log(heropageContents);
  return (
    <>
      <div className="container d-flex justify-content-center pt-5">
        <Image
          src="/creditcard.png"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
      <div className="container d-flex justify-content-center">
        <h1 className="text-center">
          <b>{heropageContents?.text}</b>
        </h1>
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
