import React from "react";
import { connect } from "react-redux";
const CartSummary = ({ cartItems }) => {
    return (
        <button type="button" class="btn btn-primary">
            <i class="fa fa-shopping-cart" aria-hidden="true"></i>

            <span class="badge badge-light">{cartItems.length > 0 ? cartItems.length : ''}</span>
        </button>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.CartReducer.items
});
export default connect(mapStateToProps, null)(CartSummary)