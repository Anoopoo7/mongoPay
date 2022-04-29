const getApis = () => {
    const backendAPI = process.env.BACKENDAPI || "http://localhost:8000/v1";
    const ENV = process.env.ENV || "LOCAL";
    const AppId = process.env.APPID || "MONGOPAY";
    return { backendAPI, ENV, AppId };
};

export default {
    getApis,
};