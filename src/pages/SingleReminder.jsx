import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Carousel } from 'react-bootstrap'
const Styles = styled.div`
 padding: 20px;

 .individual-reminder{
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 700px;
   padding: 30px 50px;
   padding-bottom: 5%;
 }

 h2, h1 {
    margin-top: 20px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 .both-icons {
    margin-left: 82%;
}

.edit-icons {
   background-color: white;
   color: black;
   border: transparent;
}

 .update-buttons {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   padding: 10px;

   h3 {
       color: black;
   }
`;


const SingleReminder = ({reminders, edit, deleteReminder}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const reminder = reminders.find((r) => r.id === id)
    console.log(reminder)
    
    return <Styles>
    <div>
        <div className="individual-reminder">
            <div className="both-icons">
                <button className="edit-icons"onClick={() => edit(reminder)}><FontAwesomeIcon icon={faEdit}/></button>
                <button className="edit-icons" onClick={() => deleteReminder(reminder)}><FontAwesomeIcon icon={faTrash}/></button>
            </div>
            <div className="reminder-details">
                <h1>{reminder?.title}</h1>
                <h2>{reminder?.details}</h2>
            </div>
        </div>
        <Link to="/">
            <button className="update-buttons">Go Back</button>
        </Link>

    <div>
    {/* <h1>Previous Reminders</h1>
    <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slidfffe label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel> */}
    </div>
    
    </div>
    </Styles>
}

export default SingleReminder
