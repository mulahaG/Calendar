{/*import './User.css';
import React, {useState} from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import { useNavigate } from "react-router-dom";

const UserBady = styled.div`
  width: 100vw;
`
const HomeContainer = styled.div`
  padding-top: 80px;
`
const DesignCalendar =styled.div`
  display: flex;
  position: flex;
  justify-content: center;
  left:flex;
`
const CalendarList =styled.div`
  width: 12%;
  background-color:aliceblue;
  height: 100vh;
  position: fixed;
  left:flex;
  top:80px;
`
const FreindList =styled.div`
  width: 12%;
  background-color:aliceblue;
  height: 100vh;
  position:fiex;
  float: right;
  top:80px;
`
const List_text =styled.div`
  width: 12%; 
  background-color:#979797;
  font-size: 40px;
  position:fixed;
  text-align: center;
`

const CalendarButton = styled.div`
  width: 12%;
  position: fixed;
  margin: auto; 
  background-color:#979797;
  justify-content: space-between;
  display: flex;
  align-items:flex-end;
`
const Delete = styled.div`
  border: 1px solid #000000;
  width: 80px;
  font-size: 20px;
  color: ${(props) => props.color || "black"};   
  text-align: center;
  
`
const Erollment = styled.div`
  border: 1px solid #000000;
  width: 80px;
  font-size: 20px;
  color: ${(props) => props.color || "black"};   
  text-align: center;
`


const User = () => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const onEnrollment = (e) => {
    e.preventDefault();
    navigate('/');
  }  
  const onDelete = (e) => {
    e.preventDefault();
    navigate('/');
  }


  return (
    <>
      <HomeContainer/>
      <UserBady>        
        <CalendarList>
            <List_text>일정목록</List_text> 
            <CalendarButton>
              <Erollment onClick={onEnrollment}>일정등록</Erollment>  
              <Delete onClick={onDelete}>일정삭제</Delete>
            </CalendarButton>
        </CalendarList>
        <FreindList>
          <List_text> 친구목록 </List_text>
          <CalendarButton>
            <Erollment onClick={onEnrollment}>일정등록</Erollment>  
            <Delete onClick={onDelete}>일정삭제</Delete>
          </CalendarButton>
        </FreindList>   
        <DesignCalendar>
          <Calendar onChange={onChange} value={value} className="size"/>
        </DesignCalendar>
 
      </UserBady>
    </>
  );
};

export default User;*/}
import './User.css';
import React, {useState,useEffect} from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import { useNavigate } from "react-router-dom";
import axios from "axios";
import qs from "qs";

const UserBady = styled.div`
  width: 100vw;
`
const HomeContainer = styled.div`
  padding-top: 80px;
`
const DesignCalendar =styled.div`
  display: flex;
  position: flex;
  justify-content: center;
  left:flex;
`
const CalendarList =styled.div`
  width: 12%;
  background-color:aliceblue;
  height: 100vh;
  position: fixed;
  left:flex;
  top:80px;
`
const FreindList =styled.div`
  width: 12%;
  background-color:aliceblue;
  height: 100vh;
  position:fiex;
  float: right;
  top:80px;
`
const List_text =styled.div`
  width: 12%; 
  background-color:#979797;
  font-size: 40px;
  position:fixed;
  text-align: center;
`

const CalendarButton = styled.div`
  width: 12%;
  position: fixed;
  margin: auto; 
  background-color:#979797;
  justify-content: space-between;
  display: flex;
  align-items:flex-end;
`
const Delete = styled.div`
  border: 1px solid #000000;
  width: 80px;
  font-size: 20px;
  color: ${(props) => props.color || "black"};   
  text-align: center;
  
`
const Erollment = styled.div`
  border: 1px solid #000000;
  width: 80px;
  font-size: 20px;
  color: ${(props) => props.color || "black"};   
  text-align: center;
`

const User = () => {
  const [value, onChange] = useState(new Date());
  const navigate = useNavigate();
  const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "aw4xOd79BOGywPbOe4RQbw7Cl2VZUG4N";
  const onEnrollment = (e) => {
    e.preventDefault();
    navigate('/');
  }  
  const onDelete = (e) => {
    e.preventDefault();
    navigate('/');
  }

  const code = new URL(window.location.href).searchParams.get("code");

  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });

    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      navigate("/user");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <>
      <HomeContainer/>
      <UserBady>        
        <CalendarList>
            <List_text>일정목록</List_text> 
            <CalendarButton>
              <Erollment onClick={onEnrollment}>일정등록</Erollment>  
              <Delete onClick={onDelete}>일정삭제</Delete>
            </CalendarButton>
        </CalendarList>
        <FreindList>
          <List_text> 친구목록 </List_text>
          <CalendarButton>
            <Erollment onClick={onEnrollment}>일정등록</Erollment>  
            <Delete onClick={onDelete}>일정삭제</Delete>
          </CalendarButton>
        </FreindList>   
        <DesignCalendar>
          <Calendar onChange={onChange} value={value} className="size"/>
        </DesignCalendar>
 
      </UserBady>
    </>
  );
};

export default User;
