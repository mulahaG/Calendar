import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/common/HeaderComponent';
import Home from './components/home';
import Login from './components/login';
import Auth from "./components/login/Auth";
import Profile from "./components/login/Profile";

function App() {
  const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>} />
        <Route path={KAKAO_AUTH_URL}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>

  </>
  );
}

export default App;
