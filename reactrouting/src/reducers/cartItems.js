
const cartItemsReducer = (state = [], action) => {
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


