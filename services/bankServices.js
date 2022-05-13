import http from "../https/http";
import apimethods from "./apiMethods.json";

const getBankNames = async() => {
    const response = (await http.apicall(apimethods.GET, "/banks")) || {};
    return response;
};
const sendBankRequest = async(username, email, bankId) => {
    const body = {
        bankId: bankId,
        userName: username,
        email: email,
    };
    const response =
        (await http.apicall(apimethods.POST, "/banks/request", body)) || {};
    return response;
};

export default {
    getBankNames,
    sendBankRequest,
};