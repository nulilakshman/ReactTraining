
const initialState = {
    items: []
}

const cartItemsReducer = (state = [], action) => {
    console.log(state)
    console.log(action)
    debugger
    if (action.type === 'ADD-TO-CART') {
        //state.push(action.selectedproduct)
        const items = [...state, action.selectedproduct]
        return items;
    }
    if (action.type === 'REMOVE-FROM-CART') {
        
        return [...state];
    }

    return state;
}

export default cartItemsReducer


