import React, { useEffect } from 'react'
import { Button, Card, CardBody, Row } from 'reactstrap'
import contactImage from '../assets/logo512.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userDashboard } from './store/action'

const Dashboard = () => {

  const dispatch = useDispatch()
  const store = useSelector(state => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(userDashboard())
  }, [])

  useEffect(() => {
    if (localStorage.getItem("userToken") === null) {
      navigate("/login")      
    }
  }, [])

  return (
    <Card>
      <CardBody className='text-white px-4'>
        <Row className='imageRow justify-content-center'>
          <img src={contactImage} alt='Contact image' />
        </Row>
        <Row className='my-3 text-center'>
          <h3>Welcome {store.data}</h3>
          <h1>Start Adding your contacts on Cloud...</h1>
        </Row>
        <Row>
          <Button tag={Link} to={'/user/add-contacts'} size='lg'>Add New Contact</Button>
        </Row>
      </CardBody>
    </Card>
  )
}

export default Dashboard