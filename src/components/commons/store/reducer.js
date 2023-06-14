const initialState = {
    data: '',
    status: 0,
    alert: false
}

export const commonReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, data: action.data, status: action.status }
        case 'REGISTER':
            return { ...state, data: action.data, status: action.status }
        default:
            return { ...state }
    }
}