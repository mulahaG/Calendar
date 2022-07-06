import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppHeader = styled.div`
    background-color: #403D3D;
    width: 100vw;
    position: fixed;
`

const NavContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
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

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;

const Img = styled.img`
    background-color: white;
    width: 50px;
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 8px;
    input {
        height: 30px;
        width: 100%;
        margin: 0 16px;
        padding: 2px 4px;
    }
`;

const MenuBox = styled.div`
    display: flex;
    gap: 8px;
`

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

    return (
        <AppHeader>
            <NavContainer>
                    <LogContainer  onClick={onHome}>
                        <LogBox color="#724ef5">Calendar</LogBox>
                    </LogContainer>
                
                {/* 로그인 */}
                <LogContainer onClick={onLogin}>
                    <LogBox color="#fa1d1d">Log Out</LogBox>
                </LogContainer>
            </NavContainer>
        </AppHeader>
    )
}

export default HeaderComponent;