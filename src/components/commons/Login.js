import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { getData } from './data/store/action'

const Login = () => {

    const [input, setInput] = useState({
        "email": '',
        "password": ''
    })

    const dispatch = useDispatch()
    const store = useSelector(state => state.commons)

    console.log("Store:", store)

    const { register, setError, clearErrors, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            "email": '',
            "password": ''
        }
    })

    const onInputChange = (selector, e) => {
        setInput({
            ...input,
            [selector]: e.target.value
        })
        setValue(selector, e.target.value)
    }

    const onSubmit = (data) => {
        dispatch(getData())
    }

    return (
        <Row style={{ minHeight: '630px' }}>
            <Col></Col>
            <Col className='loginForm p-4 h-80 my-auto'>
                <Row className='my-auto'>
                    <h1 className='d-flex justify-content-center'> Login </h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                                onChange={(e) => onInputChange('email', e)}
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
                                onChange={(e) => onInputChange('password', e)}
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                Remember Me
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

export default Login