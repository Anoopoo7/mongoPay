import http from "../https/http";
import apimethods from "./apiMethods.json";

const getBankNames = async() => {
    const response = (await http.apicall(apimethods.GET, "/banks")) || {};
    return response;
};

export default {
    getBankNames,
};