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
    return response;
};

const sendMoneyByIdsAndAmount = async(senderId, recieverId, amount) => {
    const body = {
        senderId,
        recieverId,
        amount,
    };
    const response =
        (await http.apicall(apimethods.POST, "/transaction/sendmoney", body)) || {};
    return response;
};

export default {
    searchUser,
    getFriendUsers,
    geUtserChatByChatId,
    sendMoneyByIdsAndAmount,
};