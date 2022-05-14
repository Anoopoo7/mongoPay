import http from "../https/http";
import apimethods from "./apiMethods.json";

const searchUser = async(searchTerm) => {
    const response =
        (await http.apicall(apimethods.GET, `/transaction/search/${searchTerm}`)) || {};
    return response;
};

export default {
    searchUser,
};