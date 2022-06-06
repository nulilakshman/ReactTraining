import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../Api"
import ProductCard from "./ProductCard";
import { Row, Col } from "reactstrap"
const Home = () => {
    const [products, setProducts] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await getAllProducts();
            console.log(result.data)
            setProducts(result.data)
        }
        fetchData();
    }, []);

    return (
        <Row>
            {
                products.map(x => {
                    return <ProductCard {...x}></ProductCard>
                })
            }
        </Row>
    )
}

export default Home