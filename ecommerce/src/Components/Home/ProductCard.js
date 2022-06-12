import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap"
const ProductCard = ({ favourites, cartItems, productName, imageUrl, category, price, id, addToFavourites, removeFavourite, addToCart, removeCart }) => {
    const isMarkedFavourite = (id) => {
        return favourites.indexOf(id) !== -1;
    }

    const isItemInCart = (id) => {
        return cartItems.findIndex(x => x.id === id) !== -1;
    }

    const getQty = (id) => {
        return cartItems.find(x => x.id === id).qty;
    }

    return (
        <Col lg="3" md="6" sm="6" key={id}>
            <div class="card" style={{ width: '18rem' }}>
                <img src={imageUrl} class="card-img-top" alt={productName} />
                <div class="card-body">
                    <h5 class="card-title">{productName}</h5>
                    <p class="card-text">{category} - {price} Rs</p>

                    {
                        isItemInCart(id) ? <div>
                            <button onClick={() => removeCart(id)} style={{ marginRight: '5px' }} class="btn btn-primary">-</button>{getQty(id)}
                            <button onClick={() => addToCart(id)} style={{ marginLeft: '5px' }} class="btn btn-primary">+</button>
                        </div>
                            :
                            <button onClick={() => addToCart(id)} class="btn btn-primary">Add To Cart</button>
                    }
                    {
                        isMarkedFavourite(id) ? <button onClick={() => removeFavourite(id)} style={{ float: "right" }} class="btn btn-outline-success">
                            <i class="fa fa-heart"></i>
                        </button>
                            :
                            <button onClick={() => addToFavourites(id)} style={{ float: "right" }} class="btn btn-outline-success">
                                <i class="fa fa-heart-o"></i>
                            </button>
                    }

                </div>
            </div>
        </Col>
    )
}

export default ProductCard
