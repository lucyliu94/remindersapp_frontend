import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Styles = styled.div`
 padding: 20px;

 .individual-reminder{
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 h2 {
    margin-top: 20px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 button {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   padding: 10px;
`;


const SingleReminder = ({reminders, edit, deleteReminder}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const reminder = reminders.find((r) => r.id === id)
    console.log(reminder)
    
    return <Styles>
    <div>
        <div className="individual-reminder">
            <h1>{reminder?.title}</h1>
            <h2>{reminder?.details}</h2>
        </div>
        <button onClick={() => edit(reminder)}>Edit</button>
        <button onClick={() => deleteReminder(reminder)}>Delete</button>
        <Link to="/">
            <button className="update-buttons">Go Back</button>
        </Link>
    </div>
    </Styles>
}

export default SingleReminder
