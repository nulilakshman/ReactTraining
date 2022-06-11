import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Api"
import ProductCard from "./ProductCard";
import { Row, Col, Button } from "reactstrap"
import { makeAsFavourite, removeFavourite } from "../../Actions";
import { connect } from "react-redux";
const Home = ({ favouriteItems, addToFavourite, removeFavourite }) => {
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
                        return <ProductCard favourites={favouriteItems} removeFavourite={removeItemFromFavourite} addToFavourites={addItemToFavourite}  {...x}></ProductCard>
                    })
                }
            </Row>
        </div>
    )
}


const mapStateToProps = (state) => ({
    favouriteItems: state.ProductWishListReducer.items

});

const mapDispatchToProps = {
    addToFavourite: makeAsFavourite,
    removeFavourite: removeFavourite
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)