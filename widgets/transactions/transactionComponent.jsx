import ChatContainer from "./chantContainer";
import PeopleListContainer from "./peopleListContainer";

const TransactionComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-12">
            <div className="card chat-app">
              <PeopleListContainer />
              <ChatContainer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionComponent;
