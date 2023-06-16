import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { getProfile } from './store/action'
import { Panel } from 'primereact/panel';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.userReducer)
    const navigate = useNavigate()

    useEffect(() => {
      if (localStorage.getItem('userId') === null) {
        setTimeout(() => {
          navigate('/login')
        }, 1000)
      }
    }, [])

    useEffect(() => {
        dispatch(getProfile())
    }, [])

    return (
        <div>
            <Card>
                <CardHeader className='my-2'>
                    <h2 className='text-center text-white'>Have a look at your profile.</h2>
                </CardHeader>
                <CardBody className='my-5 mx-4'>
                    <Row>
                        <Col sm={3}>
                            <Panel legend="Name">
                                <p className="m-0 text-center">
                                    Name
                                </p>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel legend="Name">
                                <p className="m-0 text-center">
                                    {store.user.name}
                                </p>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col sm={3}>
                            <Panel legend="Email">
                                <p className="m-0 text-center">
                                    Email
                                </p>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel legend="Email">
                                <p className="m-0 text-center">
                                    {store.user.email}
                                </p>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col sm={3}>
                            <Panel legend="Phone">
                                <p className="m-0 text-center">
                                    Phone Number
                                </p>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel legend="Name">
                                <p className="m-0 text-center">
                                    {store.user.phone}
                                </p>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col sm={3}>
                            <Panel legend="Work">
                                <p className="m-0 text-center">
                                    Work
                                </p>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel legend="Work">
                                <p className="m-0 text-center">
                                    {store.user.work}
                                </p>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className='mt-2'>
                        <Col sm={3}>
                            <Panel legend="Contacts">
                                <p className="m-0 text-center">
                                    Total No. of Contacts
                                </p>
                            </Panel>
                        </Col>
                        <Col>
                            <Panel legend="Contacts">
                                <p className="m-0 text-center">
                                    {store.user.contacts?.length}
                                </p>
                            </Panel>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </div>
    )
}

export default Profile