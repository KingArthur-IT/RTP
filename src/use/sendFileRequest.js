import axios from "axios";

const baseUrl = 'https://bitrix.rtp.ru/api/'

async function sendFileRequest(url, method = 'GET', data = null){
    return await axios({
        method: method,
        url: baseUrl + url,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            "key": "TestSecret12345",
        },
        data: data,
        })
        .then((response) => {
            return response
        })
        .catch((error) => {
            return error
        })
}

export {
    sendFileRequest
}