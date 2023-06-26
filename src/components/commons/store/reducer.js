const initialState = {
    data: '',
    status: 0,
    alert: false
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, status: action.status }
        case 'LOGOUT':
            return { ...state, data: '', status: 0 }
        case 'REGISTER':
            return { ...state, status: action.status }
        default:
            return { ...state }
    }
}