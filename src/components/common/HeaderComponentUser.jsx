import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    const navigate = useNavigate();

    const onLogOut = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const onUser = (e) => {
        e.preventDefault();
        navigate('/user');
    }

    return (
        <AppHeader>
            <NavContainer>
                    <LogContainer  onClick={onUser}>
                        <LogBox color="#724ef5">Calendar</LogBox>
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