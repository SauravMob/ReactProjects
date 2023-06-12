import React from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const Signup = () => {
    return (
        <Row className='h-100'>
            <Col></Col>
            <Col className='loginForm p-4 h-80 my-auto'>
                <Row>
                    <h1 className='d-flex justify-content-center'> Register </h1>
                    <Form>
                        <FormGroup>
                            <Label for="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter your Full Name"
                                type="name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">
                                Email
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                type="number"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="work">
                                Work
                            </Label>
                            <Input
                                id="work"
                                name="work"
                                placeholder="Your designation"
                                type="work"
                            />
                        </FormGroup>
                        <FormGroup row>
                            <Label
                                for="about"
                            >
                                Write something about yourself
                            </Label>
                            <Col>
                                <Input
                                    id="about"
                                    name="about"
                                    type="textarea"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                Agreed to Terms & Conditions
                            </Label>
                        </FormGroup>
                        <FormGroup className='mt-3 d-flex justify-content-center'>
                            <Button className='m-1'>
                                Submit
                            </Button>
                            <Button className='m-1'>
                                Cancel
                            </Button>
                        </FormGroup>
                    </Form>
                </Row>
            </Col>
            <Col></Col>
        </Row>
    )
}

export default Signup