import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const SingleReminder = ({reminders, edit, deleteReminder}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const reminder = reminders.find((r) => r.id === id)
    console.log(reminder)
    
    return <div>
        <h1>{reminder?.title}</h1>
        <h2>{reminder?.details}</h2>
        <Button onClick={() => edit(reminder)}>Edit</Button>
        <Button onClick={() => deleteReminder(reminder)}>Delete</Button>
        <Link to="/">
            <Button>Go Back</Button>
        </Link>
    </div>
}

export default SingleReminder
