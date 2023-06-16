import axios from "axios";

const baseUrl = 'https://bitrix.rtp.ru/api/'

async function sendRequest(url, method = 'GET', data = null){
    return await axios({
        method: method,
        url: baseUrl + url,
        headers: {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            // 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, key',
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
    sendRequest
}