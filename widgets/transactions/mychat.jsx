const MyChat = ({ each }) => {
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
        <div className="message-data text-right">
          <span className="message-data-time">
            {getExactTime(each?.createdDate?.slice(0, 22))}
          </span>
        </div>
        {!each?.moneyFlow ? (
          <div className="message other-message float-right p-3">
            Hi, Could you send {each?.amount} for me
            <br />
            <span className="h1 p-2">{each?.amount}</span>
            <br />
            {each.status ? (
              <button className="btn btn-sm btn-success m-1">Accepted</button>
            ) : (
              <button className="btn btn-sm btn-secondary m-1">Pending</button>
            )}
          </div>
        ) : (
          <div className="message other-message float-right p-3">
            Hi, I have send {each?.amount} for you
            <br />
            <span className="h1 p-2">{each?.amount}</span>
          </div>
        )}
      </li>
    </>
  );
};

export default MyChat;
