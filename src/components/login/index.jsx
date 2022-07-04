import './Login.css';
import { useNavigate } from "react-router-dom";


  
const Login = () => {
    const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
    const REDIRECT_URI = "http://localhost:3000";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const navigate = useNavigate();
    const onKakao = (e) => {
        e.preventDefault();
        navigate(location.replace(KAKAO_AUTH_URL));
       
    }    

    return (
        
        <form className='sns-in'>
            <div class="sns_login_wrap"><div class="tit" className="tit">Log In</div>
                <div class="sns_list">
                    <ul>                    
                        <button className="Kakao_Button" onClick={onKakao} >
                            <span class="logo" >
                                <img src="kakao_long.png" alt="카카오톡"/>
                            </span>
                            <br/>
                        </button>
                    </ul>
                </div>
            </div>
        </form>
    )
}

export default Login;