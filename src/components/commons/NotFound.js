import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, CardBody, CardFooter, CardHeader, ListGroup, ListGroupItem, Row } from 'reactstrap'

const NotFound = () => {
    return (
        <div>
            <Card className='p-2 justify-content-center'>
                <CardBody className='p-5 h-100 text-center'>
                    <h1 className='text-white text-center'>Wrong Url please Check again</h1>
                    <Button className='mt-5' tag={Link} to={'/'}>Go Back to Home</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default NotFound