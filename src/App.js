import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HeaderComponent from './components/common/HeaderComponent';
import HeaderComponentUser from './components/common/HeaderComponentUser';
import Home from './components/home';
import Login from './components/login';
import User from "./components/User";
import Info from "./components/User/Info";
import CalendarEnrolment from "./components/User/CalendarEnrolment";
import CalendarDelete from "./components/User/CalendarDelete";
  // const log =(( )=>{
  //   if(URL=="http://localhost:3000"){
  //     <HeaderComponent/>
  //   }
  //   else {
  //     <HeaderComponentUser/>
  //   }
  // });
function App() {
  return (
    <>
    <BrowserRouter>
      {/* <log/> */}
      <HeaderComponent/>
      {/*<HeaderComponentUser/>*/}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} /> 
        <Route path="/info" element={<Info/>} />
        <Route path="calendarEnrolment" element={<CalendarEnrolment/>} />
        <Route path="calendarDelete" element={<CalendarDelete/>} />
        
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
