import axios from "axios"

export function makeAsFavourite(item) {
    return { payload: item, type: 'ADD-TO-FAVOUTITE' }
}

export function removeFavourite(item) {
    return { payload: item, type: 'REMOVE-FROM-FAVOUTITE' }
}

export function addToCart(item) {
    //return { payload: { id: item, qty: 1 }, type: 'ADD-TO-CART' }
    return (dispatch) => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}products/${item}`).then(x => {
            console.log('Product Detail', x.data)
            dispatch({
                payload: {
                    id: item,
                    qty: 1,
                    productprice: x.data.price,
                    totalPrice: x.data.price
                }, type: 'ADD-TO-CART'
            });
        });

    }
}

export function removeCart(item) {
    return { payload: { id: item }, type: 'REMOVE-FROM-CART' }
}

