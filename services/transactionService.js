import http from "../https/http";
import apimethods from "./apiMethods.json";

const searchUser = async(searchTerm) => {
    const response =
        (await http.apicall(apimethods.GET, `/transaction/search/${searchTerm}`)) || {};
    return response;
};

const getFriendUsers = async(userId) => {
    const response =
        (await http.apicall(apimethods.GET, `/transaction/frienduser/${userId}`)) || {};
    return response;
};

const geUtserChatByChatId = async(chatId) => {
    const response =
        (await http.apicall(apimethods.GET, `/transaction/chat/${chatId}`)) || {};
    console.log(response);
    return response;
};

export default {
    searchUser,
    getFriendUsers,
    geUtserChatByChatId,
};