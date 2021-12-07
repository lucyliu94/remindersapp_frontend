import React from 'react'
import { Link } from "react-router-dom";

const Reminder = ({ reminder }) => {
    return  <div>
    <Link to={`/reminders/${reminder.id}`}>
      <h1>{reminder.title}</h1>
    </Link>
    <h2>{reminder.details}</h2>
  </div>
}

export default Reminder
