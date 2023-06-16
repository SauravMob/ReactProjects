const initialState = {
    data: '',
    status: 0,
    alert: false
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, data: action.data, status: action.status }
        case 'LOGOUT':
            return { ...state, data: '', status: 0 }
        case 'REGISTER':
            return { ...state, data: action.data, status: action.status }
        case 'ADD_CONTACT':
            return { ...state, data: action.data, status: action.status }
        default:
            return { ...state }
    }
}