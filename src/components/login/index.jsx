import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Kakao_Button =styled.div`
    background-color:transparent;
    border: 0;
    margin: auto;
    display:block;
`
const Tit =styled.div`
    font-size: 50px;
    line-height: 100px;
    text-align: center;
    color: #1dfaef;
`
const In =styled.div`
    padding-top: 103px;
    text-align: center;
`

const Login = () => {
    const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    
    const navigate = useNavigate();
    const onKakao = (e) => {
        e.preventDefault();
        navigate((KAKAO_AUTH_URL));
    }    

    return (
        <In>
            <Tit>Log In</Tit>           
            <Kakao_Button onClick={onKakao} >
                <span class="logo" >
                    <img src="kakao_long.png" alt="카카오톡"/>
                </span><br/>
            </Kakao_Button>
        </In>
    )
}

export default Login;