export function addItemToCart(product) {
    debugger
    console.log(product)
    const obj = { selectedproduct: product, type: 'ADD-TO-CART' }
    return obj;
}

export function removeItemFromCart(selectedproduct) {
    debugger
    console.log(selectedproduct)
    const obj = { selectedproduct: selectedproduct, event: 'REMOVE-FROM-CART' }
    return obj;
}