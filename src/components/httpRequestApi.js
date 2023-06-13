import axios from "axios"

const BASE_URL = 'http://localhost:8181/'

export const httpRequestApi = async (method, endPointUrl, data) => {
    const HTTP = axios.create({
    })

    if (method !== 'GET' && method !== 'POST' && method !== 'PUT' && method !== 'DELETE') throw {status: 400, message: `Invalid HTTP method`, data: { method, endPointUrl, data }}
    try {
        //console.log("headers: ", headers)
        const url = `${BASE_URL}${endPointUrl}`
        const res = await HTTP({
            method,
            url,
            data
        })
        return res
    } catch (err) {
        throw err.response
    }
}