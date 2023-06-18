import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser, logoutUser } from './store/action'
import { useLocation, useNavigate } from 'react-router-dom'
import { regexEmail } from '../utility/Utils'
import classNames from 'classnames'

const Login = () => {

    const loc = useLocation()
    const dispatch = useDispatch()
    const store = useSelector(state => state.commonReducer)
    const navigate = useNavigate()
    const [alert, setAlert] = useState({
        show: false,
        message: ''
    })

    useEffect(() => {
        if (store.status === 200) {
            setTimeout(() => {
                navigate('/user/dashboard')
            }, 1000);
        } else if (store.data === 'User does not exist') {
            setAlert({
                show: true,
                message: 'Invalid Credentials!!'
            })
        }
    }, [store])

    useEffect(() => {
        setTimeout(() => {
            setAlert({
                show: false,
                message: ''
            })
        }, 5000)
    }, [alert])

    useEffect(() => {
        if (loc.pathname === '/logout') {
            dispatch(logoutUser())
            setAlert({
                show: true,
                message: "Logged Out Successfully!!"
            })
            localStorage.removeItem('userId')
        }
    }, [])

    const [input, setInput] = useState({
        "email": '',
        "password": ''
    })

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
        dispatch(loginUser(data))
    }

    const loginValidation = {
        email: { required: "Required field", pattern: { value: regexEmail, message: 'Invalid email id' } },
        password: { required: "Required field", minLength: { value: 6, message: "Password must be atleat 3 character" } }
    }

    return (
        <Row style={{ minHeight: '630px' }}>
            <Col></Col>
            <Col className='loginForm p-4 h-80 my-auto'>
                <Row className='my-auto'>
                    <h1 className='d-flex justify-content-center'> Login </h1>
                    {alert.show && <div className='my-2'>
                        <Alert severity="error" className='text-center alert alert-danger'>{alert.message}</Alert>
                    </div>}
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                            <Input
                                id="email"
                                {...register('email', loginValidation.email)}
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
                            <Label for="password">
                                Password
                            </Label>
                            <Input
                                id="password"
                                {...register('password', loginValidation.password)}
                                className={classNames(`form-control ${errors.password ? 'is-invalid' : ''}`)}
                                aria-invalid={errors.password ? "true" : "false"}
                                name="password"
                                placeholder="Enter your password"
                                type="password"
                                onChange={(e) => onInputChange('password', e)}
                            />
                            {errors.password && <p className='error-msg'>{errors.password.message}</p>}
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