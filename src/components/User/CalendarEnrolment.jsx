import React from "react";
import styled from "styled-components";

const In =styled.div`
padding-top: 103px;
text-align: center;
`
const Tit =styled.div`
font-size: 50px;
line-height: 100px;
text-align: center;
color: #00ff22;
`
const Schedule_List = styled.div`
    text-align: center;
    font-size: 20px;
`
const CalendarEnrolment = () => {

    return (
        <>
        <In>
            <Tit>일정 등록</Tit>
            <Schedule_List>
                일    정   명 : <input type="text"/><br/>
                일 정   기 간 : <input type="datetime-local"/>  ~ <input type="datetime-local"/><br/>
                매일/주/월/년 : 매일<input type="checkbox"/> 매주<input type="checkbox"/> 매월<input type="checkbox"/> 매년<input type="checkbox"/>
            </Schedule_List>
        </In>
        </>
    );
}
export default CalendarEnrolment;