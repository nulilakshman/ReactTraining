import axios from "axios"

export function getUsers() {
    debugger
    return (dispatch) => {
        debugger
        axios.get('https://reqres.in/api/users?page=2').then((x) => {
            debugger
            console.log('Data Received from API', x)
            dispatch({ type: 'GET-ALL-USERS', payload: x.data.data })
        }).catch(e => {
            console.log('Error !!!');
        });
        console.log('Api call Triggered !!');
    }
}