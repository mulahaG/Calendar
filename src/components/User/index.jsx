import './User.css';
import axios from "axios";
import qs from "qs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import
import { useNavigate } from "react-router-dom";


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
const MyName = styled.div`
text-align: center;
`
const User = () => {  
  const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "aw4xOd79BOGywPbOe4RQbw7Cl2VZUG4N";
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
 
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  // calllback으로 받은 인가코드
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
      getProfile();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

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

  // const onButton = (e) => {
  //   e.preventDefault();
  //   alert(nickName);
  // }

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
        <MyName>
          nickName
        </MyName>
        <DesignCalendar>
          <Calendar onChange={onChange} value={value} className="size"/>
        </DesignCalendar>
 
    </>
  );
};

export default User;

