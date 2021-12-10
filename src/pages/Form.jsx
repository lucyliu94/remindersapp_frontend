import {useState} from "react";
import {useNavigate} from "react-router-dom"
import styled from "styled-components";

const Styles = styled.div`
 padding: 20px;

 form {
   background: white;
   border: 1px solid #dedede;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   margin: 0 auto;
   max-width: 500px;
   padding: 30px 50px;
 }

 input {
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   box-sizing: border-box;
   padding: 10px;
   width: 100%;
 }

 label {
   color: #3d3d3d;
   display: block;
   font-family: sans-serif;
   font-size: 15px;
   font-weight: 500;
   margin-bottom: 5px;
   margin-top: 10px;
 }

 span {
   font-size: 20px;
 }

 .submitButton {
   background-color: #6976d9;
   color: white;
   font-family: sans-serif;
   font-size: 14px;
   margin: 20px 0px;
`;

const Form = ({initialReminder, handleSubmit, buttonLabel}) => {

  const navigate = useNavigate()

  // The Form State
  const [formData, setFormData] = useState(initialReminder)

  // Handle Change to Update State when Input changes
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  // HandleSubmit for when the form submited
  const handleSubmission = (event) => {
    // prevent the page from refresh
    event.preventDefault()
    // pass the formData to the handleSubmit function passes as props
    handleSubmit(formData)
    //push user back to main page
    navigate("/")

  }

  return <Styles>
    <form className = "form-box" onSubmit={handleSubmission}>
    
    <label> <span>Title </span>
        <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
        placeholder= "ex: Feed my dog... "
        />
    </label>

    <label> <span>Details </span>
        <input
        type="text"
        onChange={handleChange}
        value={formData.details}
        name="details"
        placeholder="ex: 1/2 a cup twice a day..."
        />
        <input type="submit" className="submitButton" value={buttonLabel} />
    </label>
    
  </form>
  </Styles>
};

export default Form;