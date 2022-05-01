import http from "../https/http";
import apimethods from "./apiMethods.json";

const userLogin = async(email, password) => {
    const body = {
        email: email,
        password: password,
    };
    const response =
        (await http.apicall(apimethods.POST, "/users/login", body)) || {};
    return response;
};

const getUserCards = async(email, cardHolderId) => {
    const body = {
        email: email,
        cardHolderId: cardHolderId,
    };
    const response =
        (await http.apicall(apimethods.POST, "/users/cards", body)) || {};
    return response;
};

export default {
    userLogin,
    getUserCards
};