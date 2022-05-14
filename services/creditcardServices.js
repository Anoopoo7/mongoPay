import http from "../https/http";
import apimethods from "./apiMethods.json";

const prioritizecard = async(CardId) => {
    const response =
        (await http.apicall(
            apimethods.GET,
            `/cards/prioritize?cardId=${CardId}`
        )) || {};
    return response;
};

const changeOtp = async(cardId, oldOTP, newOTP) => {
    const body = {
        cardId,
        oldOTP,
        newOTP,
    };
    const response =
        (await http.apicall(apimethods.POST, "/cards/chnageOtp", body)) || {};
    return response;
};

export default {
    prioritizecard,
    changeOtp,
};