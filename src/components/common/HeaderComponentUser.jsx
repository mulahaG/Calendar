import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const AppHeader = styled.div`
    background-color: #403D3D;
    width: 100vw;
    position: fixed;
`

const NavContainer = styled.div`
    margin: 0 auto;
    max-width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 16px 8px;
`;

const LogContainer = styled.div`
    display: flex;
`;

const LogBox = styled.div`
    font-size: 36px;
    color: ${(props) => props.color || "black"};
`;

const HeaderComponentUser = () => {
  const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
  const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
  const CLIENT_SECRET = "aw4xOd79BOGywPbOe4RQbw7Cl2VZUG4N";

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
      navigate(window.location.replace('/user'));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

    const navigate = useNavigate();

    const onLogOut = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const onUser = (e) => {
        e.preventDefault();
        navigate('/user');
    }
    const onInfo = (e) => {
        e.preventDefault();
        navigate('/onInfo');
    }

    return (
        <AppHeader>
            <NavContainer>

                <LogContainer  onClick={onUser}>
                    <LogBox color="#724ef5">Calendar</LogBox>
                </LogContainer>

                <LogContainer onClick={onInfo}>
                    <LogBox color="#ffffff">My Info</LogBox>
                </LogContainer>
                {/* 로그인 */}
                <LogContainer onClick={onLogOut}>
                    <LogBox color="#fa1d1d">Log Out</LogBox>
                </LogContainer>
            </NavContainer>
        </AppHeader>
    )
}

export default HeaderComponentUser;