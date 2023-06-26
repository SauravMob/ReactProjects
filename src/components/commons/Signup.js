import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './store/action'
import { useNavigate } from "react-router-dom";
import { regexEmail, regexPhone } from '../utility/Utils'
import classNames from 'classnames'

const Signup = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.commonReducer)
    const navigate = useNavigate()

    useEffect(() => {
        if (store.status === 200) {
            setTimeout(() => {
                navigate('/login')
            }, 2000);
        }
    }, [store])

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

    const signUpValidations = {
        "name": { required: "Required Field" },
        "email": { required: "Required field", pattern: { value: regexEmail, message: 'Invalid email id' } },
        "phone": { required: "Required field", pattern: { value: regexPhone, message: 'Invalid phone number' } },
        "password": { required: "Required field", minLength: { value: 4, message: "Password must be atleat 4 character" } },
        "work": { required: "Required Field" },
        "about": { required: "Required Field" },
        "enabled": { required: "Required Field", pattern: { value: 'on', message: "Please Check the terms and conditions" } }
    }

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
        dispatch(registerUser(data))
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
                                {...register('name', signUpValidations.name)}
                                className={classNames(`form-control ${errors.name ? 'is-invalid' : ''}`)}
                                aria-invalid={errors.name ? "true" : "false"}
                                name="name"
                                placeholder="Enter your Full Name"
                                type="name"
                                onChange={(e) => onInputChange('name', e)}
                            />
                            {errors.name && <p className='error-msg'>{errors.name.message}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                {...register('email', signUpValidations.email)}
                                className={classNames(`form-control ${errors.email ? 'is-invalid' : ''}`)}
                                aria-invalid={errors.name ? "true" : "false"}
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                                onChange={(e) => onInputChange('email', e)}
                            />
                            {errors.email && <p className='error-msg'>{errors.email.message}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="phone">
                                Phone Number
                            </Label>
                            <Input
                                id="phone"
                                {...register('phone', signUpValidations.phone)}
                                className={classNames(`form-control ${errors.phone ? 'is-invalid' : ''}`)}
                                aria-invalid={errors.phone ? "true" : "false"}
                                name="phone"
                                placeholder="Enter your phone number"
                                type="number"
                                onChange={(e) => onInputChange('phone', e)}
                            />
                            {errors.phone && <p className='error-msg'>{errors.phone.message}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                {...register('password', signUpValidations.password)}
                                className={classNames(`form-control ${errors.password ? 'is-invalid' : ''}`)}
                                aria-invalid={errors.password ? "true" : "false"}
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                                onChange={(e) => onInputChange('password', e)}
                            />
                            {errors.password && <p className='error-msg'>{errors.password.message}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="work">
                                Work
                            </Label>
                            <Input
                                id="work"
                                {...register('work', signUpValidations.work)}
                                className={classNames(`form-control ${errors.work ? 'is-invalid' : ''}`)}
                                aria-invalid={errors.work ? "true" : "false"}
                                name="work"
                                placeholder="Your designation"
                                type="work"
                                onChange={(e) => onInputChange('work', e)}
                            />
                            {errors.work && <p className='error-msg'>{errors.work.message}</p>}
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
                                    {...register('about', signUpValidations.about)}
                                    className={classNames(`form-control ${errors.about ? 'is-invalid' : ''}`)}
                                    aria-invalid={errors.about ? "true" : "false"}
                                    name="about"
                                    type="textarea"
                                    onChange={(e) => onInputChange('about', e)}
                                />
                                {errors.about && <p className='error-msg'>{errors.about.message}</p>}
                            </Col>
                        </FormGroup>
                        <FormGroup check>
                            <Input type="checkbox"
                                id='enabled'
                                {...register('enabled', signUpValidations.enabled)}
                                className={classNames(`form-control ${errors.enabled ? 'is-invalid' : ''}`)}
                                name='enabled'
                                onChange={(e) => onInputChange('enabled', e)}
                            />
                            {errors.enabled && <p className='error-msg'>{errors.enabled.message}</p>}
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