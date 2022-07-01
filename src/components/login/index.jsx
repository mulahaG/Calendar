import './Login.css';

const Login = () => {
    return (
        <form className='sns-in'>
            <div class="sns_login_wrap"><div class="tit" className="tit">Log In</div>
                <div class="sns_list">
                    <ul>                        
                        <button className="Kakao_Button">
                            <a href="javascript:void(0);">
                                <span class="logo">
                                    <img src="kakao_long.png" alt="카카오톡"/>
                                </span>
                            </a><br/>
                        </button>
                    </ul>
                </div>
            </div>
        </form>
    )
}

export default Login;