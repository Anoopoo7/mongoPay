import PeopleListComponent from "./peopleListComponent";

const PeopleListContainer = ({
  searchuser,
  availableUsers,
  setSelectedUser,
}) => {
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
    return exactTime;
  };
  const convertTime = (time) => {
    const today = new Date().toISOString();
    const currentExT = getExactTime(today.slice(0, 22));
    const LastExT = getExactTime(time.slice(0, 22));
    if (currentExT.year == LastExT.year) {
      if (currentExT.month == LastExT.month) {
        if (currentExT.date == LastExT.date) {
          if (currentExT.hrs == LastExT.hrs) {
            if (currentExT.mins == LastExT.mins) {
              return "online";
            } else {
              return `${
                (currentExT.mins | 0) - (LastExT.mins | 0)
              } minutes ago`;
            }
          } else {
            return `${(currentExT.hrs | 0) - (LastExT.hrs | 0)} hour ago`;
          }
        } else {
          return `${(currentExT.date | 0) - (LastExT.date | 0)} day ago`;
        }
      } else {
        return `${(currentExT.month | 0) - (LastExT.month | 0)} months ago`;
      }
    } else {
      return "years ago";
    }
  };
  return (
    <>
      <PeopleListComponent
        searchuser={searchuser}
        availableUsers={availableUsers}
        convertTime={convertTime}
        setSelectedUser={setSelectedUser}
      />
    </>
  );
};

export default PeopleListContainer;
