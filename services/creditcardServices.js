import http from "../https/http";
import apimethods from "./apiMethods.json";

const prioritizecard = async(CardId) => {
    const response =
        (await http.apicall(apimethods.GET, `/cards/prioritize?cardId=${CardId}`)) || {};
    return response;
};


export default {
    prioritizecard,
};