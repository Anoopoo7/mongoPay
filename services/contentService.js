import http from "../https/http";
import apimethods from "./apiMethods.json";

const getHomepageContents = async() => {
    const data = {
        email: "testuser00@gmail.com",
        password: "testuser_0@123",
    };
    const response = await http.apicall(apimethods.GET, "/contents/homepage", data);
    return response;

};

export default {
    getHomepageContents,
};