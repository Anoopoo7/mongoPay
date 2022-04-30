import HttpDetails from "../config";
import axios from "axios";

const getInstance = async(backendAPI, ENV, AppId, url) => {
    const apiUrl = backendAPI + url;
    let config = {
        headers: {
            ENV: ENV,
            appId: AppId,
        },
    };
    return axios.get(apiUrl, config);
};
const postInstance = async(backendAPI, ENV, AppId, url, body) => {
    const apiUrl = backendAPI + url;
    let config = {
        headers: {
            ENV: ENV,
            appId: AppId,
        },
    };
    return axios.post(apiUrl, body, config);
};

const apicall = async(method, url, body) => {
    const { backendAPI, ENV, AppId } = HttpDetails.getApis() || {};
    if (method === "get") {
        const response = await getInstance(backendAPI, ENV, AppId, url) || {};
        return response.data;
    } else if (method === "post") {
        const response = await postInstance(backendAPI, ENV, AppId, url, body) || {};
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
        return null;
    }
);

export default {
    apicall,
};