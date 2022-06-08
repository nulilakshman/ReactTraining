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
import { getAllUsers } from "../../Api";

import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Users = () => {

    const [rowData, setRowData] = useState([
        { name: "san", phone: "1234", role: "admin" },
        { name: "sand", phone: "12345", role: "admin" }
    ]);

    const [showLoader, setShowLoader] = useState(false);
    const [userListLoaded, setUserListLoaded] = useState(false);
    useEffect(() => {
        //using getallusers we are invoking the api and the response we set to avariable
        async function fetchData() {
            try{
                setShowLoader(true);
                let response = await getAllUsers();
                setRowData(response.data);
                setShowLoader(false);
                setUserListLoaded(true);
            }catch(e){
                setShowLoader(false);
            }
           
        }
        if(!userListLoaded)
            fetchData();
    });



    const [columnDefs] = useState([
        { field: 'name' },
        { field: 'phone' },
        { field: 'role' }
    ]);


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
                                            <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
                                                <AgGridReact

                                                    rowData={rowData}
                                                    columnDefs={columnDefs}>

                                                </AgGridReact>
                                                {
                                                    showLoader ? <div class="spinner-border text-primary" role="status">
                                                        <span class="sr-only">Loading...</span>
                                                    </div>
                                                        : null
                                                }


                                            </div>
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