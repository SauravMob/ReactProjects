import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, ListGroup, ListGroupItem, Row } from 'reactstrap'

const Home = () => {
    return (
        <div>
            <Card className='p-2'>
                <CardHeader>
                    <h3 className='text-center text-white'>Welcome to Contact Manager App</h3>
                </CardHeader>
                <CardBody className='px-5'>
                    <Row>
                        A contact manager is a software application or tool designed to organize and store contact information in a structured and easily accessible manner. It serves as a centralized repository for storing and managing contact details of individuals or organizations. The primary purpose of a contact manager is to help users efficiently maintain and retrieve their contacts whenever needed.
                    </Row>
                    <Row>
                        Here are the key features and functionalities typically found in a contact manager:
                        <ListGroup className='my-1'>
                            <ListGroupItem>
                                Contact Information Storage: A contact manager allows users to store a wide range of information about each contact, including their name, phone numbers, email addresses, physical addresses, job titles, company details, birthdays, social media profiles, and any other relevant notes or custom fields.
                            </ListGroupItem>
                            <ListGroupItem>
                                Contact Categorization and Grouping: Contact managers often provide options for categorizing contacts into groups or creating custom tags. This feature allows users to classify contacts based on different criteria such as personal and professional, friends and family, business partners, suppliers, or any other custom categories the user may define.
                            </ListGroupItem>
                            <ListGroupItem>
                                Search and Quick Retrieval: A robust search function is essential in a contact manager, enabling users to find specific contacts quickly. Users can typically search by name, phone number, email address, or any other available field. The search results are usually displayed in real-time as the user types, facilitating a swift and efficient contact retrieval process.
                            </ListGroupItem>
                            <ListGroupItem>
                                Contact Import and Export: Contact managers offer the ability to import existing contacts from various sources such as email clients, spreadsheets, or other contact management systems. Conversely, they also provide options to export contacts to different formats, enabling users to share or migrate their contact data between systems.
                            </ListGroupItem>
                            <ListGroupItem>
                                Contact Duplication Management: To avoid clutter and maintain data accuracy, contact managers often include features to identify and manage duplicate contacts. These tools can detect similar or identical entries based on specific criteria like name, email, or phone number. Users can then merge or delete duplicate entries to maintain a clean and organized contact list.
                            </ListGroupItem>
                            <ListGroupItem>
                                Contact Interaction Tracking: Some contact managers provide features for tracking interactions with contacts, such as recording notes from meetings or phone calls, logging email conversations, or adding task reminders. These capabilities help users keep track of their engagements and facilitate better follow-up and relationship management.
                            </ListGroupItem>
                        </ListGroup>
                    </Row>
                </CardBody>
                <CardFooter className='px-5'>
                    <Row>
                        Overall, a contact manager provides a centralized and organized approach to storing and managing contact information. It simplifies contact retrieval, enables efficient communication, and helps users maintain accurate and up-to-date contact details. Whether used by individuals, small businesses, or large organizations, a contact manager is an indispensable tool for effectively managing and nurturing professional relationships.
                    </Row>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Home