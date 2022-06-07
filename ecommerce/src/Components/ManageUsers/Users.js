import {
    Row,
    Col,
    CardBody,
    Card,
    Container,
    CardTitle

} from "reactstrap"
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Users = () => {
   
       
    


    return (
        <React.Fragment>
            <div id="layout-wrapper">
                <h2></h2>
                <div className="main-content">
                    <div className="page-content">
                        <Container fluid>
                            <Row>
                                <Col lg="12">
                                    <Card>
                                        <CardBody>
                                            <CardTitle>Manage Users</CardTitle>
                                            <AgGridReact
                                             //   rowData={rowData}
                                              //  columnDefs={columnDefs}
                                                >
                                            </AgGridReact>
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

export default Users