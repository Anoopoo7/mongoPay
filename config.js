const getApis = () => {
    const backendAPI = process.env.BACKENDAPI || "https://mongopay.herokuapp.com/v1";
    const ENV = process.env.ENV || "PROD";
    const AppId = process.env.APPID || "MONGOPAY";
    return { backendAPI, ENV, AppId };
};

export default {
    getApis,
};