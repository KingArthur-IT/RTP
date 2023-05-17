import axios from "axios";

const baseUrl = 'https://pm-rtp-test-4.swforge.ru/api/'

async function sendRequest(url, method = 'GET', data = null){
    return await axios({
        method: method,
        url: baseUrl + url,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            "key": "TestSecret12345"
        },
        data: data
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