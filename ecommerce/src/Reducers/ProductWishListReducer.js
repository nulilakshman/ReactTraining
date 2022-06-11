const initialState = {
    items: []
}

const ProductWishListReducer = (state = initialState, action) => {
    if (action.type === 'ADD-TO-FAVOUTITE') {
        const favItems = [...state.items, action.payload]
        return { items: favItems };
    }
    if (action.type === 'REMOVE-FROM-FAVOUTITE') {
        debugger
        const items = [...state.items]
        items.splice(items.indexOf(action.payload), 1);
        return { items: items };
    }

    return state;
}

export default ProductWishListReducer