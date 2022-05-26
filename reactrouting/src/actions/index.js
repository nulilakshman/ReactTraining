export function addItemToCart(selectedproduct) {
    debugger
    console.log(selectedproduct)
    const obj = { selectedproduct: selectedproduct, type: 'ADD-TO-CART' }
    return obj;
}

export function removeItemFromCart(selectedproduct) {
    debugger
    console.log(selectedproduct)
    const obj = { selectedproduct: selectedproduct, event: 'REMOVE-FROM-CART' }
    return obj;
}