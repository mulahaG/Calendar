import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import HeaderComponent from './components/common/HeaderComponent';
import HeaderComponentUser from './components/common/HeaderComponentUser';
import Home from './components/home';
import Login from './components/login';
import Profile from "./components/login/Profile";
import Auth from "./components/login/Auth";
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
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/oauth/kakao/callback" element={<Auth/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
