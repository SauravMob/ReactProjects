import { httpRequestApi } from "../../httpRequestApi"

export const loginUser = (data) => {
    const uri = 'login'
    return async dispatch => {
        await httpRequestApi('POST', uri, data)
        .then(response => {
            localStorage.setItem('userId', response.data)
            dispatch({
                type: 'LOGIN',
                data: response.data,
                status: response.status
            })
        })
        .catch(error => {
            console.log("Err", error)
            dispatch({
                type: 'LOGIN',
                data: error.data,
                status: error.status
            })
        })
    }
}

export const registerUser = (data) => {
    const uri = 'register'
    return async dispatch => {
        await httpRequestApi('POST', uri, data)
        .then(response => {
            console.log("response:", response)
            dispatch({
                type: 'REGISTER',
                data: response.data,
                status: response.status
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}