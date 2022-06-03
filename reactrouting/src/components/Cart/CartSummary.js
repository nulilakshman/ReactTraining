import React from "react"
import { connect } from "react-redux"
const CartSummary = ({ cartItems }) => {
    console.log('CartSummary', cartItems)
    return (
        <div>
            Total Cart Items:{cartItems.length}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state

});

export default connect(mapStateToProps, null)(CartSummary)