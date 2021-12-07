import React from 'react'
import Reminder from '../components/reminder'

const AllReminders = (props) => {
    return props.reminders.map((reminder)=> <Reminder reminder={reminder} key={reminder.id}/>);
}

export default AllReminders

