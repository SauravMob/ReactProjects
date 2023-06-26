import { httpRequestApi } from "../../httpRequestApi"

export const loginUser = (data) => {
    const uri = 'login'
    return async dispatch => {
        await httpRequestApi('POST', uri, data, {}, false)
            .then(response => {
                localStorage.setItem('userToken', response.data.token)
                dispatch({
                    type: 'LOGIN',
                    status: response.status
                })
            })
            .catch(error => {
                console.log("Err", error)
                dispatch({
                    type: 'LOGIN',
                    status: error.status
                })
            })
    }
}

export const registerUser = (data) => {
    const uri = 'register'
    return async dispatch => {
        await httpRequestApi('POST', uri, data, {}, false)
            .then(response => {
                dispatch({
                    type: 'REGISTER',
                    status: response.status
                })
            })
            .catch(err => {
                console.log("Error", err)
            })
    }
}

export const logoutUser = () => {
    const uri = 'logout'
    return async dispatch => {
        await httpRequestApi('GET', uri)
            .then(response => {
                dispatch({
                    type: 'LOGOUT',
                    data: response.data,
                    status: response.status
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}