import axios from "axios"

export function getUsers() {
    return (dispatch) => {
        dispatch({ type: 'GET-ALL-USERS-STARTED' })
        axios.get('https://reqres.in/api/users?page=2').then((x) => {
            debugger
            console.log('Data Received from API', x)
            dispatch({ type: 'GET-ALL-USERS', payload: x.data.data })
        }).catch(e => {
            console.log('Error !!!');
            dispatch({ type: 'GET-ALL-USERS-ERROR', payload: 'Error found while processing!!!' })
        });
        console.log('Api call Triggered !!');
    }
}