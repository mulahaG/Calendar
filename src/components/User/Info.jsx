
import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const HomeContainer = styled.div`
  padding-top: 103px;
`
const In =styled.div`
    width : 700px;
    height: 500px;
    position:relative;
    border: 1px solid #00aeff;
    position: fixed;
    left: 50%;
    transform: translateX( -50% );
`
const Tit =styled.div`
    font-size: 50px;
    line-height: 100px;
    text-align: center;
    text-align: center;
    color: #000000;
`
const Text = styled.div`
    margin-top: 20px;
`
const Schedule_List = styled.div`
    font-size: 20px;
    position: realtive ;
    float: justify;
`
const Info = () => {
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
  
    useEffect(() => {
      getProfile();
    }, []);


      return (
        <>      
          <HomeContainer/>
          <In>
            <Tit>개인 정보</Tit>
            <Schedule_List>
              <Text>● 이름 : {nickName} </Text>
              <Text>● E-mail : {user_id} </Text>
              {profileImage}
            </Schedule_List>
          </In>
        </>  
        
      )
    }
export default Info