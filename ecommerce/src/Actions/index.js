export function makeAsFavourite(item) {
    return { payload: item, type: 'ADD-TO-FAVOUTITE' }
}

export function removeFavourite(item) {
    return { payload: item, type: 'REMOVE-FROM-FAVOUTITE' }
}

export function addToCart(item) {
    debugger
    return { payload: item, type: 'ADD-TO-CART' }
}

