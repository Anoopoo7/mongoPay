import http from "../https/http";
import apimethods from "./apiMethods.json";

const getHomepageContents = async() => {
    const response =
        (await http.apicall(apimethods.GET, "/contents/homepage")) || {};
    return response;
};

export default {
    getHomepageContents,
};