import React from "react";
import styled from "styled-components";
import FeedCard from "../components/FeedCard";
import { Divider } from "antd";
const Home = () => {
  const today = Date();
  const date = today.split(" ");

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const next_date = tomorrow.toString().split(" ");
  console.log(next_date);

  return (
    <>
      <HomeHeader>
        <h1 className="text-light">Good Morning</h1>
        <h3>Dora Designer</h3>
        <p className="home-information-label">2 Deadlines . 14 Alerts Today</p>
      </HomeHeader>
      <section className="tab">
        <FeedContainer>
          <div className="date-day-container">
            <span className="date-description">{`${date[0]} ${date[1]} ${date[2]}, ${date[3]}`}</span>
            <span className="day-description">Today</span>
          </div>
          <Divider />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <Divider />
          <div className="date-day-container">
            <span className="date-description">{`${next_date[0]} ${next_date[1]} ${next_date[2]}, ${next_date[3]}`}</span>
            <span className="day-description">Tomorrow</span>
          </div>
          <FeedCard />
          <FeedCard />
        </FeedContainer>
      </section>
    </>
  );
};

export default Home;

const HomeHeader = styled.div`
  margin-left: 3em;
  margin-block: 15px;

  h1,
  h3 {
    margin: 0;
    font-size: 2.2em;
  }
  h3 {
    color: #f0f4fd;
    opacity: 80%;
    font-size: 1.7em;
  }

  .home-information-label {
    font-size: 1.1em;
    font-weight: 600;
    margin: 10px 0;
  }
  @media screen and (max-width: 400px) {
    h1 {
      font-size: 1.5em;
    }
    h3 {
      font-size: 1em;
    }
    .home-information-label {
      font-size: 0.9em;
    }
  }
`;

const FeedContainer = styled.div`
  width: 90%;
  margin-inline: auto;
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .date-day-container {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .date-description {
    color: #152551;
    font-size: 1.1em;
  }
  .day-description {
    color: #152551;
    font-size: 2.5em;
    font-weight: bold;
  }

  .ant-divider-horizontal {
    margin-block: 20px;
    background-color: #152551;
    opacity: 30%;
    border-width: 2px;
    width: 90%;
    min-width: 90%;
    margin-inline: auto;
  }
`;
