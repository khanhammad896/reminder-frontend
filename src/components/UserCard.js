import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import image from "../assets/img0.jpg";
const UserCard = () => {
  return (
    <>
      <UserCardContainer>
        <div className="avatar-section">
          <Avatar src={image} />
        </div>
        <div className="card-body">
          <div className="user-info-section">
            <div>
              <span className="user-name">Jonathan D.Dye</span>
              <span className="user-text">Hello</span>
            </div>
          </div>
          <div className="user-online-status">
            <div>
              <span className="online-circle" />{" "}
              <span className="online-time">10:00 am</span>
            </div>
          </div>
        </div>
      </UserCardContainer>
    </>
  );
};

export default UserCard;

const UserCardContainer = styled.div`
  width: 100%;
  height: 80px;
  background: #fff;
  border-radius: 15px;
  margin-block: 10px;
  padding-inline: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .card-body {
    flex-grow: 1;
    margin-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 70%;
  }

  .ant-avatar {
    width: 45px;
    height: 45px;
  }

  .user-info-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
  }
  .user-info-section > div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .user-name {
    color: #2c3b63;
    font-size: 1.5em;
    font-weight: 100;
  }
  .user-text {
    color: #bdc2d2;
  }

  .user-online-status {
    height: inherit;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
  }

  .user-online-status > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #2c3b63;
  }

  .online-circle {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #4bc09b;
    margin-inline: 10px;
  }

  @media screen and (max-width: 400px) {
    height: 70px;
    .card-body {
      margin-left: 10px;
    }

    .ant-avatar {
      width: 40px;
      height: 40px;
    }
    .user-name {
      font-size: 1em;
    }

    .user-text {
      font-size: 95%;
    }

    .online-time {
      font-size: 85%;
    }

    .online-circle {
      margin-inline: 7px;
    }
  }

  @media screen and (max-width: 350px) {
    height: 60px;

    .card-body {
      margin-left: 5px;
    }

    .ant-avatar {
      width: 30px;
      height: 30px;
    }

    .user-name {
      font-size: 0.8em;
    }

    .user-text {
      font-size: 70%;
    }

    .online-time {
      font-size: 65%;
    }

    .online-circle {
      margin-inline: 7px;
    }
  }
`;
