const initialState = {
    usersList: []
}

const UserReducer = (state = initialState, action) => {
    debugger
    if (action.type === 'GET-ALL-USERS') {
        return { usersList: action.payload };
        //const result={...state, }
    }

    return state;
}

export default UserReducer