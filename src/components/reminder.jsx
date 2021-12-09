import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';



const Reminder = ({ reminder }) => {
    return  <div className="all-reminders border rounded #dedede w-50 p-5 mx-auto">
    <Link to={`/reminders/${reminder.id}`}>
      <h1>{reminder.title}</h1>
    </Link>
    <h2>{reminder.details}</h2>
  </div>
}

export default Reminder
