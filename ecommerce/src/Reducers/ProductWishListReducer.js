const initialState = {
    items: []
}

const ProductWishListReducer = (state = initialState, action) => {
    if (action.type === 'ADD-TO-FAVOUTITE') {
        const favItems = [...state.items, action.payload]
        return { items: favItems };
    }

    return state;
}

export default ProductWishListReducer