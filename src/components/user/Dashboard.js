import React from 'react'
import { Button, Card, CardBody, Row } from 'reactstrap'
import contactImage from '../assets/logo512.png'

const Dashboard = () => {
  return (
    <div>
      <Card>
        <CardBody className='text-white px-4'>
          <Row className='imageRow justify-content-center'>
            <img src={contactImage} alt='Contact image' />
          </Row>
          <Row className='my-3 text-center'>
            <h1>Start Adding your contacts on Cloud...</h1>
          </Row>
          <Row>
            <Button size='lg'>Add New Contact</Button>
          </Row>
        </CardBody>
      </Card>
    </div>
  )
}

export default Dashboard