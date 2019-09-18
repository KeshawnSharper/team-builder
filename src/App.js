
import logo from './logo.svg';
import './App.css';
import Member from "./member"
import Input from "./form"
import { setUseProxies } from 'immer';
import React, { useState } from "react";



function App() {
const [user, setUser] = useState([{name:"Keshawn",role:"front-end",Experience:"2 years"}])
  const newMember = member =>
  {
const newNote = {
  id: Date.now(),
  name:member.name,
  Experience:member.Experience,
  role:member.role

}
setUser([...user, newNote])
  }
  return (
    <div className="App">
      <Input newMember={newMember}/>
      <Member user={user} />
      
    </div>
    
    
  );
}

export default App;
