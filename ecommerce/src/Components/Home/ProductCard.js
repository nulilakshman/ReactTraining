import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap"
const ProductCard = ({ productName, imageUrl, category, price, id }) => {
    return (
        <Col lg="3" md="6" sm="6">
            <div class="card" style={{ width: '18rem' }}>
                <img src={imageUrl} class="card-img-top" alt={productName} />
                <div class="card-body">
                    <h5 class="card-title">{productName}</h5>
                    <p class="card-text">{category} - {price} Rs</p>
                    <a href="#" class="btn btn-primary">Add To Cart</a>
                    
                    <button style={{float:"right"}} class="btn btn-outline-success"><i class="fa fa-heart-o"></i></button>
                </div>
            </div>
        </Col>
    )
}

export default ProductCard
