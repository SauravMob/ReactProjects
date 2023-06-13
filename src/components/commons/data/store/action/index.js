import { httpRequestApi } from "../../../../httpRequestApi"

export const getData = () => {
    const uri = '/home'
    return async dispatch => {
        await httpRequestApi('GET', uri)
        .then(response => {
            dispatch({
                type: 'GET_DATA',
                response: response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    }
}