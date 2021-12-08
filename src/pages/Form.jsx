import {useState} from "react";
import {useNavigate} from "react-router-dom"

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

  return <form onSubmit={handleSubmission}>
    
    <label> Title: 
        <input
        type="text"
        onChange={handleChange}
        value={formData.title}
        name="title"
        placeholder= "ex: Feed my dog... "
        />
    </label>

    <label> Details: 
        <input
        type="text"
        onChange={handleChange}
        value={formData.details}
        name="details"
        placeholder="ex: 1/2 a cup twice a day..."
        />
        <input type="submit" value={buttonLabel} />
    </label>
    
  </form>
};

export default Form;