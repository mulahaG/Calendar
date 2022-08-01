import React, {useState} from "react";
import styled from "styled-components";

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
    color: #000000;
`
const Schedule_List = styled.div`
    font-size: 20px;
    position: realtive ;
    float: justify;
`
const Bady = styled.div`
    display: flex;
    justify-content: center;
`
const Text = styled.div`
    margin-top: 20px;
`

const CalendarEnrolment = () => {
    const [dateTitle, setDateTitle] = useState('');
    const [email, setEmail] = useState('');
    const [dateColor, setDateColor] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [selected,setSelected] = useState('');
    const [freind, setFreind] = useState('');


    const onDelete = (e) => {
        const REST_API_KEY = "efa63d774bf94d489920b4d4633f11ee";
        const REDIRECT_URI = "http://localhost:3000/user";
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
        e.preventDefault();
        window.location.replace(KAKAO_AUTH_URL);
        // alert("일정명 : " + dateTitle + "\n이메일 : " + email + "\n일정기간 : "+ dateStart + "~" + dateEnd + "\n반복 : " + selected + "\n색상 : " + dateColor + "\n친구 : " + freind);
    }

    return (
        <>
        <HomeContainer/>
        <In>
            <Tit>일정 등록</Tit>
            <form  onSubmit={onDelete}>
                <Bady>
                    <Schedule_List>
                        <Text>● 일정명 </Text>
                        <Text>● 이메일</Text>
                        <Text>● 일정기간 </Text>
                        <Text>● 매일/주/월/년 </Text>
                        <Text>● 날짜색상 </Text>
                        <Text>● 친구 </Text>
                    </Schedule_List>
                    <Schedule_List>
                        <Text>: <input type="text" value={dateTitle} name="title" onChange={event => setDateTitle(event.target.value)} required/></Text>
                        <Text>: <input type="email" value={email} name="email" id="email" onChange={event => setEmail(event.target.value)} required/></Text>
                        <Text>
                            : <input type="datetime-local" value={dateStart} name="dateStart" onChange={event => setDateStart(event.target.value)} required/>
                             ~ <input type="datetime-local" value={dateEnd} name="dateEnd" onChange={event => setDateEnd(event.target.value)} required/>
                        </Text>
                        <Text>
                            : <select v-model="selected" value={selected} onChange={event => setSelected(event.target.value)}>
                                <option>하루</option>
                                <option>매일</option>
                                <option>매주</option>
                                <option>매월</option>
                                <option>매년</option>
                            </select>
                        </Text>
                        <Text>: <input type="color" value={dateColor} onChange={event => setDateColor(event.target.value)} /></Text>
                        <Text>
                            : <select v-model="selected"  value={freind} onChange={event => setFreind(event.target.value)}>
                                <option>freind</option>
                                <option>freind</option>
                            </select>
                        </Text><br/>
                    </Schedule_List>
                </Bady>
                <Bady><button type="submit">등록</button></Bady>
            </form>
            </In>
        </>
    );
}
export default CalendarEnrolment;