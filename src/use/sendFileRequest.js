import axios from "axios";

const baseUrl = 'https://bitrix.rtp-test.swforge.ru:8080/api-send/' //'https://bitrix.rtp.ru:8080/api/' //'https://bitrix.vps-2.swforge.ru/api/'// 'https://bitrix.rtp.ru/api/'

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