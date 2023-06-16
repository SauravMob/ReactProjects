import React, { useEffect } from 'react'
import { Button, Card, CardBody, Row } from 'reactstrap'
import contactImage from '../assets/logo512.png'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('userId') === null) {
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    }
  }, [])

  return (
    <Card>
      <CardBody className='text-white px-4'>
        <Row className='imageRow justify-content-center'>
          <img src={contactImage} alt='Contact image' />
        </Row>
        <Row className='my-3 text-center'>
          <h3>Welcome {localStorage.getItem("userId")}</h3>
          <h1>Start Adding your contacts on Cloud...</h1>
        </Row>
        <Row>
          <Button size='lg'>Add New Contact</Button>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Dashboard