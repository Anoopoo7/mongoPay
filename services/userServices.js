import http from "../https/http";
import apimethods from "./apiMethods.json";

const userLogin = async() => {
    const body = {
        email: "testuser00@gmail.com",
        password: "testuser_0@123",
    };
    const response =
        (await http.apicall(apimethods.POST, "/users/login", body)) || {};
    return response;
};

export default {
    userLogin,
};