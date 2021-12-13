import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`
 h1 {
   font-size: 1.8em;
   color: black;
 }

 h2 {
   margin-top: 6%;
   font-size: 1em;
   color: grey;
 }
`;

const Reminder = ({ reminder }) => {
    return  <Styles>
       <Link to={`/reminders/${reminder.id}`}>
      <div className="all-reminders border rounded #dedede p-3 mx-auto">
          <h1>{reminder.title}</h1>
          <h2>{reminder.details}</h2>
      </div>
      </Link>
      </Styles>
      
}

export default Reminder
