import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {useState, useEffect} from "react";
import AllReminders from "./pages/AllReminders"

function App() {

  //api 
  const url = "https://remindersapp-backend-ll.herokuapp.com/reminders/";

  //state to hold all the reminders
  const [reminders, setReminders] = useState([]);

//  Function to get list of REMINDERS from api
const getReminders = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setReminders(data);
};

useEffect(() => {
  getReminders();
}, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AllReminders reminders={reminders}/>}/>
        <Route path="/reminder/id"/>
        <Route path="/new"/>
        <Route path="edit"/>
      </Routes>



    </div>
  );
}

export default App;
