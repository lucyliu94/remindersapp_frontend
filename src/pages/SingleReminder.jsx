import React from 'react'
import { Link, useParams } from 'react-router-dom'

const SingleReminder = ({reminders, edit, deleteReminder}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const reminder = reminders.find((r) => r.id === id)
    console.log(reminder)
    
    return <div>
        <h1>{reminder?.title}</h1>
        <h2>{reminder?.details}</h2>
        <button onClick={() => edit(reminder)}>Edit</button>
        <button onClick={() => deleteReminder(reminder)}>Delete</button>
        <Link to="/">
            <button>Go Back</button>
        </Link>

    </div>
}

export default SingleReminder
