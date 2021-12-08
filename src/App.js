import logo from './logo.svg';
import './App.css';
import {Route, Routes, Link, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import AllReminders from "./pages/AllReminders"
import SingleReminder from './pages/SingleReminder';
import Form from './pages/Form';

function App() {

  const navigate = useNavigate()

  //api 
  const url = "https://remindersapp-backend-ll.herokuapp.com/reminders/";

  //state to hold all the reminders
  const [reminders, setReminders] = useState([]);

  //initializing the form here
  const nullReminder = {
    title:"",
    details: ""
  }

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


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllReminders reminders={reminders}/>}/>
        <Route path="/reminders/:id" element={<SingleReminder 
        reminders={reminders} 
        // edit={getTargetReminder}
        // deleteReminder={deleteReminder}
        />} />
        <Route path="/new" element={<Form
        initialReminder={nullReminder}
        handleSubmit={addReminders}
        buttonLabel="Create New Reminder"
        />}/>
        <Route path="edit"/>
      </Routes>

    </div>
  );
}

export default App;
