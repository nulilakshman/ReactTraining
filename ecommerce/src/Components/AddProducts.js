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

const AddProducts = () => {
    return (
        <React.Fragment>
            
            <div id="layout-wrapper">
                <h2>Ecommerce-Capstone</h2>

                <div className="main-content">


                    <div className="page-content">
                        <Container fluid>
                            <Row>
                                <Col lg="12">
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Add Products</CardTitle>
                                            <Form>
                                                <Row>
                                                    <Col lg="6">
                                                        <Label for="userName" className="col-sm-6 col-form-Label">
                                                            UserName *
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                        />
                                                    </Col>
                                                    <Col lg="6">
                                                        <Label for="userName" className="col-sm-6 col-form-Label">
                                                            UserName *
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </CardBody>

                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

            </div>

           
        </React.Fragment>
    )
}

export default AddProducts