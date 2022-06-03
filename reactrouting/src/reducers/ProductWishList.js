const initialState = {
    items: []
}

const ProductWishListReducer = (state = [], action) => {
    debugger
    if (action.type === 'ADD-TO-WISHLIST') {
        const items = [...state, action.selectedproduct]
        return items;
    }
    if (action.type === 'REMOVE-FROM-WISHLIST') {
        
        return [...state];
    }
    return state;
}

export default ProductWishListReducer