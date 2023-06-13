import React from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'

const AddContact = () => {
  return (
    <div>
      <Card>
        <CardBody className='text-white px-4'>
          <Row>
            <h4 className='d-flex justify-content-center'> Contact Details </h4>
            <Form>
              <FormGroup>
                <Label for="name">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter contacts name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phone">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="Enter contacts number"
                  type="number"
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
                <Label for="work">
                  Work
                </Label>
                <Input
                  id="work"
                  name="work"
                  placeholder="Work Details"
                  type="text"
                />
              </FormGroup>
              <FormGroup row>
                <Label
                  for="about"
                >
                  Write something about contact
                </Label>
                <Col>
                  <Input
                    id="about"
                    name="about"
                    type="textarea"
                  />
                </Col>
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