import React, { useState } from "react"
import {
    Button,
    Row,
    Col,
    Form,
    CardBody,
    Card,
    FormGroup,
    Label,
    Container,
    CardTitle,
    Input
} from "reactstrap"
import { Link, withRouter, useNavigate, useParams } from "react-router-dom";
import * as Utility from '../../Common/Util'
import { saveProduct } from '../../Api'

const AddProducts = () => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        productName: '',
        description: '',
        price: '',
        imageUrl: '',
        category: '',
        status: 1
    })
    const onInputChange = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const isDataValid = () => {
        let errorCount = 0;
        if (Utility.isNullOrEmptyOrUndefined(product.productName)) {
            errorCount++;
        }

        if (Utility.isNullOrEmptyOrUndefined(product.description)) {
            errorCount++;
        }
        if (Utility.isNullOrEmptyOrUndefined(product.price)) {
            errorCount++;
        }
        if (Utility.isNullOrEmptyOrUndefined(product.imageUrl)) {
            errorCount++;
        }
        if (Utility.isNullOrEmptyOrUndefined(product.category)) {
            errorCount++;
        }
        return errorCount > 0 ? false : true;
    }

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row className="row justify-content-end">
                        <Col lg="2">
                            <div className="button-items row justify-content-end">
                                <Link to={`/manage-products`} className=" mr-3 mb-4">
                                    <i className="bx bx-arrow-back"></i> Back to Manage Products
                                </Link>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardTitle>Add Products</CardTitle>
                                <CardBody>
                                    <Form>
                                        <Row>
                                            <Col lg="6">
                                                <Label for="productName" className="col-sm-6 col-form-Label">
                                                    Name *
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="productName"
                                                    onChange={onInputChange}
                                                    name="productName"
                                                />
                                                {
                                                    isSubmitted && !product.productName ? (<div className="invalid-feedback">
                                                        Please enter product name
                                                    </div>) : null
                                                }
                                            </Col>
                                            <Col lg="6">
                                                <Label for="price" className="col-sm-6 col-form-Label">
                                                    Price *
                                                </Label>
                                                <Input
                                                    type="number"
                                                    className="form-control"
                                                    id="price"
                                                    onChange={onInputChange}
                                                    name="price"
                                                />
                                                {
                                                    isSubmitted && !product.price ? (<div className="invalid-feedback">
                                                        Please enter product price
                                                    </div>) : null
                                                }
                                            </Col>
                                            <Col lg="6">
                                                <Label for="imageUrl" className="col-sm-6 col-form-Label">
                                                    Image Url *
                                                </Label>
                                                <Input
                                                    type="text"
                                                    className="form-control"
                                                    id="imageUrl"
                                                    onChange={onInputChange}
                                                    name="imageUrl"
                                                />
                                                {
                                                    isSubmitted && !product.imageUrl ? (<div className="invalid-feedback">
                                                        Please enter product image Url
                                                    </div>) : null
                                                }
                                            </Col>
                                            <Col lg="6">
                                                <Label for="category" className="col-sm-6 col-form-Label">
                                                    Category *
                                                </Label>
                                                <Input
                                                    type="select"
                                                    className="form-control"
                                                    id="category"
                                                    onChange={onInputChange}
                                                    name="category"
                                                >
                                                    <option value="0">--Select--</option>
                                                    <option value="1">Dairy</option>
                                                    <option value="2">Vegetables</option>
                                                    <option value="3">Munchies</option>
                                                </Input>
                                                {
                                                    isSubmitted && !product.category ? (<div className="invalid-feedback">
                                                        Please enter product category
                                                    </div>) : null
                                                }
                                            </Col>
                                            <Col lg="6">
                                                <Label for="description" className="col-sm-6 col-form-Label">
                                                    Description *
                                                </Label>
                                                <Input
                                                    type="textarea"
                                                    className="form-control"
                                                    id="description"
                                                    onChange={onInputChange}
                                                    name="description"
                                                />
                                                {
                                                    isSubmitted && !product.description ? (<div className="invalid-feedback">
                                                        Please enter product description
                                                    </div>) : null
                                                }
                                            </Col>
                                        </Row>
                                        <Row className="row justify-content-end">
                                            <Col sm={12}>
                                                <div>
                                                    <Button
                                                        style={{ float: 'right' }}
                                                        type="button"
                                                        color="secondary"
                                                        className="w-md mr-2"
                                                        onClick={(e) => {
                                                            navigate(`/manage-products`);
                                                        }}
                                                    >Cancel</Button>
                                                    {
                                                        isLoading ? <div class="spinner-border text-primary" role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                            : null
                                                    }
                                                    <Button
                                                        style={{ float: 'right', marginRight: '5px' }}
                                                        type="submit"
                                                        color="primary"
                                                        className="w-md mr-4"
                                                        onClick={async (e) => {
                                                            e.preventDefault();

                                                            setIsSubmitted(true)

                                                            if (!isDataValid()) {
                                                                return;
                                                            }
                                                            try {
                                                                setIsLoading(true);
                                                                await saveProduct({ ...product })
                                                                setIsLoading(false);
                                                                navigate(`/manage-products`);
                                                            } catch (e) {
                                                                setIsLoading(false);
                                                            }
                                                        }}
                                                    >
                                                        Save Product
                                                    </Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default AddProducts