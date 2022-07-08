import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useHistory } from "react-router-dom";

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

const HeaderComponent = () => {
    const navigate = useNavigate();
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
    } 
        catch (err) {
            console.log(err);
        }
    };
        useEffect(() => {
            getProfile();
        }, []);

        const onLogin = (e) => {
            e.preventDefault();
            navigate('/login');
        }

    const onHome = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <AppHeader>
            <NavContainer>
                    <LogContainer  onClick={onHome}>
                        <LogBox color="#724ef5">Calendar</LogBox>
                    </LogContainer>
                
                {/* 로그인 */}
                <LogContainer onClick={onLogin}>
                    <LogBox color="#1dfaef">Log In</LogBox>
                </LogContainer>
            </NavContainer>
        </AppHeader>
    )
}

export default HeaderComponent;