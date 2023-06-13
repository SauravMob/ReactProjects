import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const Signup = () => {

    const [input, setInput] = useState({
        "name": '',
        "email": '',
        "phone": '',
        "password": '',
        "work": '',
        "about": '',
        "enabled": false
    })

    const { register, setError, clearErrors, handleSubmit, formState: { errors }, setValue } = useForm({
        defaultValues: {
            "name": '',
            "email": '',
            "phone": '',
            "password": '',
            "work": '',
            "about": '',
            "enabled": false
        }
    })

    const onInputChange = (selector, e) => {
        if (selector === 'enabled') {
            if (e.target.value === 'on') {
                setInput({
                    ...input,
                    ["enabled"]: true
                })
                setValue('enabled', true)
            } else {
                setInput({
                    ...input,
                    ["enabled"]: false
                })
                setValue('enabled', false)
            }
        } else {
            setInput({
                ...input,
                [selector]: e.target.value
            })
            setValue(selector, e.target.value)
        }
    }

    const onSubmit = (data) => {
        axios.post('http://localhost:8181/register', data)
            .then(response => console.log("Response:", response))
            .catch(err => console.log("Error:", err))
    }

    return (
        <Row className='h-100'>
            <Col></Col>
            <Col className='loginForm p-4 h-80 my-auto'>
                <Row>
                    <h1 className='d-flex justify-content-center'> Register </h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label for="name">
                                Name
                            </Label>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Enter your Full Name"
                                type="name"
                                onChange={(e) => onInputChange('name', e)}
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
                                onChange={(e) => onInputChange('email', e)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">
                                Phone Number
                            </Label>
                            <Input
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                type="number"
                                onChange={(e) => onInputChange('phone', e)}
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
                        <FormGroup>
                            <Label for="work">
                                Work
                            </Label>
                            <Input
                                id="work"
                                name="work"
                                placeholder="Your designation"
                                type="work"
                                onChange={(e) => onInputChange('work', e)}
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
                                    onChange={(e) => onInputChange('about', e)}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox"
                                id='enabled'
                                name='enabled'
                                onChange={(e) => onInputChange('enabled', e)}
                            />
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