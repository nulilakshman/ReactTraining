const initialState = {
    items: []
}

const CartReducer = (state = initialState, action) => {
    debugger
    if (action.type === 'ADD-TO-CART') {
        const cart = [...state.items, action.payload]
        return { items: cart };
    }
    if (action.type === 'REMOVE-FROM-CART') {
        const items = [...state.items]
        items.splice(items.indexOf(action.payload), 1);
        return { items: items };
    }

    return state;
}

export default CartReducer