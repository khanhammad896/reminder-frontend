import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import MenuWrapper from "../components/MenuWrapper";
import Home from "./Home";
import Reminder from "./Reminder";
import Contacts from "./Contacts";
import Calendar from "./Calendar";

const Main = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <MainContainer height={height} width={width}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/reminders" component={Reminder} />
          <Route exact path="/contacts" component={Contacts} />
          <Route exact path="/calendar" component={Calendar} />
        </Switch>
        <MenuWrapper />
      </MainContainer>
    </>
  );
};

export default Main;

const MainContainer = styled.div`
  width: ${(props) => (props.width > "400" ? "30%" : "100%")};
  min-width: 400px;
  height: ${(props) => props.height}px;
  background: #5c56cd;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  @media screen and (max-width: 400px) {
    min-width: 100%;
  }
`;
