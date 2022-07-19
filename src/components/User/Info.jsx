import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import React, { useState, useEffect } from 'react';

const HomeContainer = styled.div`
  padding-top: 80px;
`
const Info = () => {
    // const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    
    const navigate = useNavigate();

    const getProfile = async () => {
      try {
        // Kakao SDK API를 이용해 사용자 정보 획득
        let data = await window.Kakao.API.request({
          url: "/v2/user/me",
        });
  
        // 사용자 정보 변수에 저장
        //setUserId(data.id);
        setNickName(data.properties.nickname);
        setProfileImage(data.properties.profile_image);
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getProfile();
    }, []);

    const onKakao = (e) => {
      e.preventDefault();
      alert(nickName);
    }
      return (
        <>      
            <HomeContainer/>
            <button onClick={onKakao}>버튼</button>
            {profileImage}
        </>  
        
      )
    }
export default Info