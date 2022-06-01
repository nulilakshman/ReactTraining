import React from "react"
import { connect } from "react-redux"
import { addItemToCart, removeItemFromCart } from "../../actions"

const ProductsList = ({ cartItems, addItems, removeItemFromCart }) => {
    debugger
    console.log('cartItems', cartItems)
    const addItemToStore = () => {
        const product = { id: 10001, name: 'Milk' };
        addItems(product);
    }
    return (
        <div>
            <h4>Products List</h4>

            <button onClick={addItemToStore}>Add Item To Cart</button>
        </div>

    )
}

const mapStateToProps = (state) => ({
    cartItems: state
})

const mapDispatchToProps = {
    addItems: addItemToCart,
    removeItemFromCart
};

//export default ProductsList

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)