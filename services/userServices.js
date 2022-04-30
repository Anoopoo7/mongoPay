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

export default {
    userLogin,
};