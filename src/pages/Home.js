import React from "react";
import styled from "styled-components";
import { Avatar, Input } from "antd";
import profile from "../assets/img0.jpg";
import UserCard from "../components/UserCard";
import { FiSearch } from "react-icons/fi";
const Home = () => {
  const today = Date();
  const date = today.split(" ");

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const next_date = tomorrow.toString().split(" ");
  console.log(next_date);

  return (
    <>
      <section className="tab">
        <FeedContainer>
          <div className="app-bar">
            <div className="heading-container">
              <span className="home-heading">Message</span>
            </div>
            <div className="avatar-container">
              <Avatar src={profile} />
            </div>
          </div>
          <div className="search-container">
            <Input.Search placeholder="Search ..." bordered={false} />
          </div>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </FeedContainer>
      </section>
    </>
  );
};

export default Home;

const FeedContainer = styled.div`
  width: 92%;
  margin-inline: auto;
  margin-top: 40px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  .app-bar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .ant-avatar {
    width: 50px;
    height: 50px;
  }
  .heading-container {
    flex-grow: 1;
  }

  .home-heading {
    font-size: 2.5em;
    color: var(--text-dark);
  }

  .search-container {
    width: 100%;
    margin-block: 20px;
    text-align: center;
  }

  .search-container input {
    width: 100%;
    height: 60px;
    border-radius: 15px;
    border: none;
    background-color: #fff;
    padding-inline: 2em;
    font-size: 1.2em;
  }

  .ant-input-group-addon {
    background: #fff;
    padding-inline: 20px;
    width: 70px;
    border-radius: 0 15px 15px 0;
  }

  .ant-input-search
    > .ant-input-group
    > .ant-input-group-addon:last-child
    .ant-input-search-button:not(.ant-btn-primary) {
    border: none;
    background-color: #f0f4fd;
    border-radius: 13px;
    width: 40px;
    height: 40px;
  }
  .anticon svg {
    font-size: 1.5em;
  }
  .search-container > input::placeholder {
    color: #cfd3dc;
    opacity: 60%;
    font-size: 1.2em;
  }

  .ant-input: placeholder-shown {
    padding-inline: 2em;
  }

  img {
    object-fit: contain;
  }

  @media screen and (max-width: 600px) {
    margin-top: 15px;
    .home-heading {
      font-size: 1.7em;
    }

    .ant-input: placeholder-shown {
      font-size: 1.1em;
    }

    .ant-input-search
      > .ant-input-group
      > .ant-input-group-addon:last-child
      .ant-input-search-button:not(.ant-btn-primary) {
      width: 35px;
      height: 35px;
      border-radius: 12px;
    }

    .anticon svg {
      font-size: 1.1em;
    }

    .search-container input {
      height: 55px;
    }
  }

  @media screen and (max-width: 350px) {
    margin-top: 15px;
    .home-heading {
      font-size: 1.2em;
    }

    .ant-avatar {
      width: 35px;
      height: 35px;
      border: 1px solid #d5d6d8;
    }

    .ant-input: placeholder-shown {
      font-size: 1.1em;
    }

    .ant-input-search
      > .ant-input-group
      > .ant-input-group-addon:last-child
      .ant-input-search-button:not(.ant-btn-primary) {
      width: 25px;
      height: 25px;
      border-radius: 8px;
    }

    .anticon svg {
      font-size: 0.9em;
    }

    .search-container input {
      height: 45px;
    }
  }
`;
