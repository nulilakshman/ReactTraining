export function makeAsFavourite(item) {
    return { payload: item, type: 'ADD-TO-FAVOUTITE' }
}

export function removeFavourite(item) {
    return { payload: item, type: 'REMOVE-FROM-FAVOUTITE' }
}

export function addToCart(item) {
    return { payload: { id: item, qty: 1 }, type: 'ADD-TO-CART' }
}

export function removeCart(item) {
    return { payload: { id: item }, type: 'REMOVE-FROM-CART' }
}

