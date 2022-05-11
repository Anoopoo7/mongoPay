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

const userRegister = async(name, email, phone, password) => {
    const body = {
        name: name,
        email: email,
        phoneNumber: phone,
        password: password,
    };
    const response =
        (await http.apicall(apimethods.POST, "/users/register", body)) || {};
    return response;
};

const editUserDetails = async(id, name, email, phone) => {
    const body = {
        id: id,
        name: name,
        email: email,
        phoneNumber: phone,
    };
    const response =
        (await http.apicall(apimethods.POST, "/users/edit", body)) || {};
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
    getUserCards,
    userRegister,
    editUserDetails,
};