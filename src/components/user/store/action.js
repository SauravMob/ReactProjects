import { httpRequestApi } from "../../httpRequestApi"

export const addContact = (data) => {
    const uri = 'user/add-contacts'
    return async dispatch => {
        await httpRequestApi('POST', uri, data)
        .then(response => {
            dispatch({
                type: 'ADD_CONTACT',
                data: response.data,
                status: response.status
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const showContacts = () => {
    const uri = 'user/show-contacts/0'
    return async dispatch => {
        await httpRequestApi('GET', uri)
        .then(response => {
            dispatch({
                type: 'SHOW_CONTACTS',
                data: response.data.content,
                total: response.data.totalElements
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const userDashboard = () => {
    const uri = 'user/dashboard'
    return async dispatch => {
        await httpRequestApi('GET', uri)
        .then(response => {
            dispatch({
                type: 'USER_DASHBOARD',
                data: response.data,
                status: response.status
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getProfile = () => {
    const uri = 'user/profile'
    return async dispatch => {
        await httpRequestApi('GET', uri)
        .then(response => {
            dispatch({
                type: 'USER_PROFILE',
                data: response.data,
                status: response.status
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const getContact = (id) => {
    const uri = `user/get-contact/${id}`
    return async dispatch => {
        await httpRequestApi('GET', uri)
        .then(response => {
            dispatch({
                type: 'GET_CONTACT',
                data: response.data,
                status: response.status
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const editContact = (id, data) => {
    const uri = `user/edit-contact/${id}`
    return async dispatch => {
        await httpRequestApi('PUT', uri, data)
        .then(response => {
            dispatch({
                type: 'EDIT_CONTACT',
                data: response.data,
                status: response.status
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}