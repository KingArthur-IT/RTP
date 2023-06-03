import axios from "axios";

const baseUrl = 'https://bitrix.rtp.ru/api-send/'

async function sendFileRequest(url, method = 'GET', data = null){
    return await axios({
        method: method,
        url: baseUrl + url,
        headers: {
            'Content-Type': 'multipart/form-data',
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