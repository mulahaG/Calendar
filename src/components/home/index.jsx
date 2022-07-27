import styled from "styled-components";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

const HomeContainer = styled.div`
  padding-top: 103px;
`
const Center =styled.div`
  padding-top: 10%;
  padding-left: 40%;
`
function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <>
      <HomeContainer/>
      <Center>
        <Calendar onChange={onChange}value={value}/>
      </Center>
    </>
  );
}

export default Home;
