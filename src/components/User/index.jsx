import './User.css';
import React, {  useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import {useNavigate } from "react-router-dom";


const HomeContainer = styled.div`
  padding-top: 80px;
`
const DesignCalendar =styled.div`
  padding-top: 23px;
  display: flex;
  position: flex;
  justify-content: center;
  align:center;
  
`
const CalendarList =styled.div`
  width: 12%;
  height: 100vh; 
  object-fit: contain;
  top:80px;
  float: left;
  background-color:aliceblue;
`
const FreindList =styled.div`
  width: 12%;
  height: 100vh; 
  background-color:aliceblue;
  top:80px;
  float: right;
` 

const List_text =styled.div`
  width: 12%; 
  background-color:#979797;
  font-size: 40px;
  position:fixed;
  text-align: center;
`

const List_Button = styled.div`
  width: 12%; 
  margin: auto; 
  background-color:#979797;
  justify-content: space-between;
  display: flex;
  align-items:flex-end;
  position : fixed;
  bottom : 0;
`
const Button = styled.div`
  border: 1px solid #000000;
  width: 80px;
  font-size: 20px;
  color: ${(props) => props.color || "black"};   
  text-align: center;
`


const User = () => {  
  const [value, onChange] = useState(new Date());  
  const navigate = useNavigate();

  const onEnrolment = (e) => {
    e.preventDefault();
    navigate('/calendarEnrolment');
  }  

  const onDelete = (e) => {
    e.preventDefault();
    navigate('/calendarDelete');
  }
  return (
    <>
      <HomeContainer/>
        <CalendarList>
            <List_text>일정목록</List_text> 
            <List_Button>
              <Button onClick={onEnrolment}>등록</Button>  
              <Button onClick={onDelete}>삭제</Button>
            </List_Button>
        </CalendarList>
        <FreindList>
          <List_text>친구목록</List_text>
          <List_Button>
            <Button onClick={onEnrolment}>등록</Button>  
            <Button onClick={onDelete}>삭제</Button>
          </List_Button>
        </FreindList>  
        <DesignCalendar>
          <Calendar onChange={onChange} value={value} className="size"/>
        </DesignCalendar>
 
    </>
  );
};

export default User;
