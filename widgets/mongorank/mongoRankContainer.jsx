import { useState } from "react";
import MongoRankComponent from "./mongoRankComponent";

const MongoRankContainer = ({ rankup }) => {
  const [rankList, setRankList] = useState([]);
  useState(() => {
    if (rankup && rankup.length > 5) return setRankList(rankup.slice(0, 5));
    setRankList(rankList);
  }, [rankup]);
  return <MongoRankComponent rankList={rankList} />;
};

export default MongoRankContainer;
