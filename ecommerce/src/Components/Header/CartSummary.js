import React from "react";
import { connect } from "react-redux";
const CartSummary = ({ cartItems }) => {
    return (
        <button type="button" class="btn btn-primary">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>

            <span class="badge badge-light">{cartItems.length > 0 ? cartItems.length : ''}</span>
            <br></br>
            <i class="fa fa-inr" aria-hidden="true"></i>
            <span class="badge badge-light">{cartItems.length > 0 ? cartItems.reduce(function (sum, product) {
                return sum + parseInt(product.totalPrice,10);
            }, 0) : ''}</span>
        </button>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.CartReducer.items
});
export default connect(mapStateToProps, null)(CartSummary)