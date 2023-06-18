import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'
import { deleteContact, showContacts } from './store/action'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useNavigate } from 'react-router-dom';

const ViewContacts = () => {

    const dispatch = useDispatch()
    const store = useSelector(state => state.userReducer)
    const rowsPerPage = 10
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem('userId') === null) {
            setTimeout(() => {
                navigate('/login')
            }, 1000)
        }
    }, [])

    const handleUpdate = (row) => {
        setTimeout(() => {
            navigate(`/user/edit-contact/${row.cid}`)
        }, 1000)
    }
    
    const handleDelete = (row) => {
        dispatch(deleteContact(row.cid))
        setTimeout(() => {
            dispatch(showContacts())
        }, 1000)
    }

    const column = [
        {
            field: 'cid',
            header: 'CID',
            sortable: true
        },
        {
            field: 'name',
            header: 'Name'
        },
        {
            field: 'email',
            header: 'Email'
        },
        {
            field: 'phone',
            header: 'Phone'
        },
        {
            field: 'about',
            header: 'About'
        },
        {
            field: 'action',
            header: 'Action',
            body: (rowData) => (
                <>
                    <Button onClick={() => handleUpdate(rowData)}>Update</Button>
                    <Button className='ms-2' onClick={() => handleDelete(rowData)}>Delete</Button>
                </>
            )
        }
    ]

    useEffect(() => {
        dispatch(showContacts())
    }, [])

    const dataToRender = () => {
        if (store.contacts.length >= 0) {
            return store.contacts
        } else {
            return []
        }
    }

    return (
        <div>
            <Card>
                <CardHeader className='my-3'><h2 className='text-center text-white'>All Contacts from your Registory</h2></CardHeader>
                <CardBody className='text-white px-4'>
                    <DataTable
                        className='my-4'
                        value={dataToRender()}
                        tableStyle={{ minWidth: '60rem' }}
                        size='medium'
                        showGridlines
                        paginator
                        rows={5}
                        rowsPerPageOptions={rowsPerPage}>
                        {column.map((col, i) => (
                            <Column sortable={col.sortable} key={col.field} field={col.field} header={col.header} body={col.body} />
                        ))}
                    </DataTable>
                </CardBody>
            </Card>
        </div>
    )
}

export default ViewContacts