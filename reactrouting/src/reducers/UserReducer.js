const initialState = {
    usersList: [],
    iserror: '',
    isProcessing: false
}

const UserReducer = (state = initialState, action) => {
    debugger
    if (action.type === 'GET-ALL-USERS-STARTED') {
        return { ...state, isProcessing: true };
    }
    if (action.type === 'GET-ALL-USERS') {
        return { usersList: action.payload, isProcessing: false, iserror: '' };
    }
    if (action.type === 'GET-ALL-USERS-ERROR') {
        console.log(state)
        const result = { ...state, iserror: action.payload, isProcessing: false }
        console.log(result)
        return result;
    }

    return state;
}

export default UserReducer