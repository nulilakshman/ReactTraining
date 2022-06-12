const initialState = {
    items: []
}

const CartReducer = (state = initialState, action) => {
    debugger
    if (action.type === 'ADD-TO-CART') {
        const items = [...state.items]
        const item = items.find(x => x.id === action.payload.id);
        if (item) {
            item.qty++;
            const allItems = [...items];
            return { items: allItems };
        }
        else {
            const cart = [...state.items, action.payload]
            return { items: cart };
        }

    }
    if (action.type === 'REMOVE-FROM-CART') {
        const items = [...state.items]
        const item = items.find(x => x.id === action.payload.id);
        if (item && item.qty > 1) {
            item.qty--;
            const allItems = [...items];
            return { items: allItems };
        }
        const itemIndex = items.findIndex(x => x.id === action.payload.id);
        items.splice(itemIndex, 1);
        return { items: items };
    }

    return state;
}

export default CartReducer