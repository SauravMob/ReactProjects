import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { addContact } from './store/action'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { regexEmail, regexPhone } from '../utility/Utils'
import { useNavigate } from 'react-router-dom'

const AddContact = () => {

  const dispatch = useDispatch()
  const store = useSelector(state => state.userReducer)
  const navigate = useNavigate()
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('userId') === null) {
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }
  }, [])

  const [input, setInput] = useState({
    "name": '',
    "email": '',
    "phone": '',
    "work": '',
    "about": ''
  })

  const { register, setError, clearErrors, handleSubmit, formState: { errors }, setValue } = useForm({
    defaultValues: {
      "name": '',
      "email": '',
      "phone": '',
      "work": '',
      "about": ''
    }
  })

  const signUpValidations = {
    "name": { required: "Required Field" },
    "email": { required: "Required field", pattern: { value: regexEmail, message: 'Invalid email id' } },
    "phone": { required: "Required field", pattern: { value: regexPhone, message: 'Invalid phone number' } },
    "work": { required: "Required Field" },
    "about": { required: "Required Field" }
  }

  const onInputChange = (selector, e) => {
    setInput({
      ...input,
      [selector]: e.target.value
    })
    setValue(selector, e.target.value)
  }

  const onSubmit = (data) => {
    setAlert(true)
    dispatch(addContact(data))
    setTimeout(() => {
      navigate('/user/show-contacts')
    }, 5000)
  }

  return (
    <div>
      <Card>
        <CardBody className='text-white px-4'>
          <Row>
            <h4 className='d-flex justify-content-center'>Enter Contact Details </h4>
            {alert && <>
              <Alert severity="error" className='text-center alert alert-success'>Contact Added Successfully</Alert>
            </>}
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
                  placeholder="Enter contact name"
                  type="text"
                  onChange={(e) => onInputChange('name', e)}
                />
                {errors.name && <p className='error-msg'>{errors.name.message}</p>}
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
                  placeholder="Enter contact number"
                  type="number"
                  onChange={(e) => onInputChange('phone', e)}
                />
                {errors.phone && <p className='error-msg'>{errors.phone.message}</p>}
              </FormGroup>
              <FormGroup>
                <Label for="email">
                  Email
                </Label>
                <Input
                  id="email"
                  {...register('email', signUpValidations.email)}
                  className={classNames(`form-control ${errors.email ? 'is-invalid' : ''}`)}
                  aria-invalid={errors.email ? "true" : "false"}
                  name="email"
                  placeholder="Enter contact email"
                  type="email"
                  onChange={(e) => onInputChange('email', e)}
                />
                {errors.email && <p className='error-msg'>{errors.email.message}</p>}
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
                  placeholder="Enter Contact Work Details"
                  type="text"
                  onChange={(e) => onInputChange('work', e)}
                />
                {errors.work && <p className='error-msg'>{errors.work.message}</p>}
              </FormGroup>
              <FormGroup row>
                <Label
                  for="about"
                >
                  Description
                </Label>
                <Col>
                  <Input
                    id="about"
                    {...register('about', signUpValidations.about)}
                    className={classNames(`form-control ${errors.about ? 'is-invalid' : ''}`)}
                    aria-invalid={errors.about ? "true" : "false"}
                    name="about"
                    type="textarea"
                    placeholder='Write something about Contact'
                    onChange={(e) => onInputChange('about', e)}
                  />
                </Col>
                {errors.about && <p className='error-msg'>{errors.about.message}</p>}
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
        </CardBody>
      </Card>
    </div>
  )
}

export default AddContact