import React from "react"
import { connect } from "react-redux"
const CartSummary = ({ cartItems, wishListItem }) => {
    console.log('CartSummary', cartItems)
    return (
        <div>
            Total Cart Items:{cartItems.length}<br></br>
            Total Wishlist Items: {wishListItem.length}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItemsReducer,
    wishListItem: state.ProductWishListReducer

});

export default connect(mapStateToProps, null)(CartSummary)