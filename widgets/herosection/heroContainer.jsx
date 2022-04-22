import { useEffect, useState } from "react";
import HeroComponent from "./heroComponent";

const HeroContainer = ({ herosection }) => {
  const [heropageContents, setHeropageContents] = useState({});
  useEffect(() => {
    herosection ? setHeropageContents(herosection) : {};
  }, [herosection]);
  return (
    <>
      <HeroComponent heropageContents={heropageContents} />
    </>
  );
};

export default HeroContainer;
