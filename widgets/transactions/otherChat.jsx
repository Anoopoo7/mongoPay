const OtherChat = ({ each }) => {
  const getExactTime = (times) => {
    const [day, time] = times.split("T") || [];
    const [hrs, mins, sec] = time.split(":") || [];
    const [year, month, date] = day.split("-") || [];
    const exactTime = {
      year,
      month,
      date,
      hrs,
      mins,
      sec,
    };
    return hrs + ":" + mins + ", " + date + "-" + month + "-" + year;
  };

  return (
    <>
      <li className="clearfix">
        <div className="message-data">
          <span className="message-data-time">
            {getExactTime(each?.createdDate?.slice(0, 22))}
          </span>
        </div>
        {!each?.moneyFlow ? (
          <div className="message other-message p-3">
            Hi, Could you send me {each?.amount} for me
            <br />
            <span className="h1 p-2">{each?.amount}</span>
            <br />
            <button className="btn btn-sm btn-success m-1">send</button>
            <button className="btn btn-sm btn-outline-secondary m-1">
              decline
            </button>
          </div>
        ) : (
          <div className="message other-message p-3">
            Hi, I have send {each?.amount} for you
            <br />
            <span className="h1 p-2">{each?.amount}</span>
          </div>
        )}
      </li>
    </>
  );
};

export default OtherChat;
