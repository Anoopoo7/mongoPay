import HttpDetails from "../config";
import axios from "axios";

const getInstance = async(backendAPI, ENV, AppId, url, params) => {
    const apiUrl = backendAPI + url;
    let config = {
        headers: {
            ENV: ENV,
            appId: AppId,
        },
        params: params,
    };
    return axios.get(apiUrl, config);
};

const apicall = async(method, url, params) => {
    const { backendAPI, ENV, AppId } = HttpDetails.getApis() || {};
    if (method === "get") {
        const response = await getInstance(backendAPI, ENV, AppId, url, params);
        return response.data;
    }
};

axios.interceptors.request.use(
    function(config) {
        console.log("start api call");
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function(response) {
        console.log("ended api call");
        return response;
    },
    function(error) {
        console.log(response);
        console.log(error);
        return Promise.reject(error);
    }
);

export default {
    apicall,
};