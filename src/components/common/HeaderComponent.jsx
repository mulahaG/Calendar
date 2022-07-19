import { useNavigate} from "react-router-dom";
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

const HeaderComponent = () => {
    const navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();
        navigate('/login');
    }

    const onHome = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const onInfo = (e) => {
        e.preventDefault();
        navigate('/info');
    }
    return (
        <AppHeader>
            <NavContainer>
                    <LogContainer  onClick={onHome}>
                        <LogBox color="#724ef5">Calendar</LogBox>
                    </LogContainer>
                    <LogContainer onClick={onInfo}>
                    <LogBox color="#ffffff">My Info</LogBox>
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