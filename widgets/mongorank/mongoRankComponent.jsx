const MongoRankComponent = ({ rankList }) => {
  return (
    <div className="container pb-5">
      <h1 className="text-center">
        <b> Mongo RankUps</b>{" "}
      </h1>
      <br />

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Rank</th>
            <th scope="col">Name</th>
            <th scope="col">Payed</th>
            <th scope="col">Gifted</th>
          </tr>
        </thead>
        <tbody>
          {rankList &&
            Array.isArray(rankList) &&
            rankList.map((eachrank, rank) => (
              <tr key={rank}>
                <th scope="row">{rank+1}</th>
                <td>{eachrank.name.toUpperCase()}</td>
                <td>₹ {eachrank.payed}</td>
                <td>₹ {eachrank.gifted}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MongoRankComponent;
