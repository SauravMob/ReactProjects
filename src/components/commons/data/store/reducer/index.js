const initialState = {
    data: ''
}

export const commons = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, data: action.data }
        default:
            break;
    }
}