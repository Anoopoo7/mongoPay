import ChatContainer from "./chantContainer";
import PeopleListContainer from "./peopleListContainer";

const TransactionComponent = ({ searchuser, availableUsers }) => {
  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <PeopleListContainer
                searchuser={searchuser}
                availableUsers={availableUsers}
              />
              <ChatContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionComponent;
