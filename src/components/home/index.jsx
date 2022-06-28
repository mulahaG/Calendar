import "../../App.css";
import styled from "styled-components";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // css import

const HomeContainer = styled.div`
  padding-top: 103px;
`

function Home() {
  const [value, onChange] = useState(new Date());
  
  return (
    <>

      <HomeContainer/>
      <div>
        <Calendar onChange={onChange}value={value}/>
      </div>
    </>
  );
}

export default Home;
