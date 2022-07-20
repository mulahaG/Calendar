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
    color: #1dfaef;
`
const HomeContainer = styled.div`
    padding-top: 103px;
`

const CalendarDelete = () => {

    return (
        <>
        <HomeContainer/>
        <In>
            <Tit>일정 삭제</Tit>
        </In>
        </>
    );
}
export default CalendarDelete;