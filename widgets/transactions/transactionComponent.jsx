import ChatContainer from "./chantContainer";
import PeopleListContainer from "./peopleListContainer";

const TransactionComponent = ({
  searchuser,
  availableUsers,
  setSelectedUser,
  selectedUser,
}) => {
  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <PeopleListContainer
                searchuser={searchuser}
                availableUsers={availableUsers}
                setSelectedUser={setSelectedUser}
              />
              <ChatContainer selectedUser={selectedUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionComponent;
