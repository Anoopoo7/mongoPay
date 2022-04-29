const getApis = () => {
    // const backendAPI = "https://mongopay.herokuapp.com/v1";
    const backendAPI = "http://localhost:8000/v1";
    const ENV = "LOCAL";
    // const ENV = "PROD";
    const AppId = "MONGOPAY";
    return { backendAPI, ENV, AppId };
};

export default {
    getApis,
};