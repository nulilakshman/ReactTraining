import React, { useState } from "react"
import axios from "axios";
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
    Input,
    FormFeedback
} from "reactstrap"

const SignUp = () => {

    const [details, setDetails] = useState({

        name: '',
        phone: '',
        role: ''
    });

    const [errors, setErrors] = useState({

        name: '',
        phone: '',
        role: ''

    });

    const [showMessage, setShowMessage] = useState();

    const onInput = (event) => {
        const obj = { ...details };       
        obj[event.target.name] = event.target.value;
        setDetails({ ...obj });
        

    }

    const validateFields =()=>{

        const errorFields={...errors};

        let isValid=true;
        if(details.name===""){
            errorFields.name="enter the valid name";
            isValid=false;
        }
        else if(details.name.length > 45 ){
            errorFields.name="the data should not be more than 45";
            isValid=false;
        }
        else{
            errorFields.name="";
        }

        if(details.phone===""){
            errorFields.phone="enter a valid phone number";
            isValid=false;
            
        }
        else if(details.phone.length > 10){
            errorFields.phone="numbers should not be more than 10";
            isValid=false;
        }
        else{
            errorFields.phone="";
        }

        if(details.role===" Select Role" || details.role===""){
            errorFields.role="select role";
            isValid=false;

        }
        else{
            errorFields.role="";
        }

        setErrors({...errorFields});
        return isValid;
        
    }

   

    const invokeApi=()=>{

        axios.post('http://localhost:4120/users', {
            name: details.name,
            phone: details.phone,
            role:details.role
          })
          .then(function (response) {

          alert('sucessful');
            console.log(response);
          })
          .catch(function (error) {
              alert('error');
            console.log(error);
          });
    }

    const onButtonClicked = () => {
        
            if(validateFields()){
                invokeApi();
            }
            validateFields();
    }

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
                                            <CardTitle>SignUp</CardTitle>
                                            <Form>
                                                <Row>
                                                    <Col lg="6">
                                                        <Label for="Name" className="col-sm-6 col-form-Label">
                                                            Name *
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                            onChange={onInput}
                                                            value={details.name}
                                                        />
                                                        <FormFeedback >
                                                            {errors.name}
                                                        </FormFeedback>
                                                    </Col>
                                                    <Col lg="6">
                                                        <Label for=" phoneNumber" className="col-sm-6 col-form-Label">
                                                            phoneNumber *
                                                        </Label>
                                                        <Input
                                                            type="text"
                                                            className="form-control"
                                                            id="phone"
                                                            name="phone"
                                                            onChange={onInput}
                                                            value={details.phone}
                                                        />
                                                        <FormFeedback>
                                                            {errors.phone}
                                                        </FormFeedback>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <Label for="role">
                                                            Role
                                                        </Label>
                                                        <Input
                                                            id="role"
                                                            name="role"
                                                            type="select"
                                                            onChange={onInput}
                                                            value={details.role}
                                                        >
                                                            
                                                            <option>
                                                                Select Role
                                                            </option>
                                                            <option>
                                                                Admin
                                                            </option>
                                                            <option>
                                                                Store Admin
                                                            </option>
                                                        </Input>
                                                        <FormFeedback>
                                                            {errors.role}
                                                        </FormFeedback>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col lg="6">
                                                        <Button
                                                            color="primary"
                                                            onClick={onButtonClicked}
                                                        >
                                                            Save
                                                        </Button>
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

export default SignUp