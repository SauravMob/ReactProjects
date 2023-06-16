const initialState = {
    data: '',
    status: 0,
    alert: false,
    contacts: [],
    total: 0,
    user: []
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return { ...state, data: action.data, status: action.status }
        case 'EDIT_CONTACT':
            return { ...state, contacts: action.data, status: action.status }
        case 'GET_CONTACT':
            return { ...state, contacts: action.data, status: action.status }
        case 'SHOW_CONTACTS':
            return { ...state, contacts: action.data, total: action.total }
        case 'USER_DASHBOARD':
            return { ...state, data: action.data, status: action.status }
        case 'USER_PROFILE':
            return { ...state, user: action.data, status: action.status }
        default:
            return { ...state }
    }
}