import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import AllReminders from "./pages/AllReminders"
import SingleReminder from './pages/SingleReminder';
import Form from './pages/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'



function App() {

  const navigate = useNavigate()

  //api 
  const url = "https://remindersapp-backend-ll.onrender.com/reminders/";

  //state to hold all the reminders
  const [reminders, setReminders] = useState([]);

  //initializing the form here
  const nullReminder = {
    title:"",
    details: ""
  }
  // target the reminders in the form 
  const [targetReminder, setTargetReminder] = useState(nullReminder)

//  Function to get list of REMINDERS from api
const getReminders = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setReminders(data);
};

useEffect(() => {
  getReminders();
}, []);

////////
//ALL FUNCTIONS
////////
//add 
const addReminders = async(newReminder) => {
  const response = await fetch(url, {
    method:"post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newReminder)
  });
  getReminders();
};

//edit

const getTargetReminder = (reminder) => {
  setTargetReminder(reminder);
  navigate("/edit")
}


//update
const updateReminder = async(reminder) =>{
  await fetch(url + reminder.id,{
    method: "put",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reminder)
  }); 
  getReminders();
};

//delete

const deleteReminder = async (reminder) => {
  await fetch (url + reminder.id, {
    method: "delete"
  });
  getReminders()
  navigate("/")
}


  return (
    <div className="App">
      <Link to="/"><h1 className="title">Reminders</h1></Link>
      <Link to="/new">
        <button className="add-button">
          <FontAwesomeIcon icon={faPlusCircle}/>
        </button>
      </Link>
      <Routes>
        <Route path="/" element={<AllReminders reminders={reminders}/>}/>
        <Route path="/reminders/:id" element={<SingleReminder 
        reminders={reminders} 
        edit={getTargetReminder}
        deleteReminder={deleteReminder}
        />} />
        <Route path="/new" element={<Form
        initialReminder={nullReminder}
        handleSubmit={addReminders}
        buttonLabel="Add to Reminders"
        />}/>
        <Route path="/edit" element={<Form
          initialReminder={targetReminder}
          handleSubmit={updateReminder}
          buttonLabel="Update Reminder"
        />}/>
      </Routes>



    </div>
  );
}

export default App;
