import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Api"
import ProductCard from "./ProductCard";
import { Row, Col, Button } from "reactstrap"
import { makeAsFavourite } from "../../Actions";
import { connect } from "react-redux";
const Home = ({ addToFavourite }) => {
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
        debugger
        addToFavourite(id)
    }

    return (
        <div>
            <button onClick={() => addToFavourite(null)} >Test Reducer</button>
            <Row>
                {
                    products.map(x => {
                        return <ProductCard addToFavourites={addItemToFavourite}  {...x}></ProductCard>
                    })
                }
            </Row>
        </div>
    )
}

const mapDispatchToProps = {
    addToFavourite: makeAsFavourite
}

export default connect(null, mapDispatchToProps)(Home)