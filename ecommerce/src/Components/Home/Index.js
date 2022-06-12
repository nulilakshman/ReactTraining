import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Api"
import ProductCard from "./ProductCard";
import { Row, Col, Button } from "reactstrap"
import { makeAsFavourite, removeFavourite, addToCart, removeCart } from "../../Actions";
import { connect } from "react-redux";
const Home = ({ favouriteItems, cartItems, addToFavourite, removeFavourite, addToCart, removeCart }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await getAllProducts();
            console.log(result.data)
            setProducts(result.data)
        }
        fetchData();
    }, []);

    const addItemToFavourite = (id) => {
        addToFavourite(id)
    }

    const removeItemFromFavourite = (id) => {
        removeFavourite(id)
    }

    return (
        <div>
            <Row>
                {
                    products.map(x => {
                        return <ProductCard favourites={favouriteItems}
                            removeFavourite={removeItemFromFavourite}
                            addToFavourites={addItemToFavourite}
                            addToCart={addToCart}
                            cartItems={cartItems}
                            removeCart={removeCart}
                            {...x}
                        ></ProductCard>
                    })
                }
            </Row>
        </div>
    )
}


const mapStateToProps = (state) => ({
    favouriteItems: state.ProductWishListReducer.items,
    cartItems: state.CartReducer.items

});

const mapDispatchToProps = {
    addToFavourite: makeAsFavourite,
    removeFavourite: removeFavourite,
    addToCart: addToCart,
    removeCart: removeCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)