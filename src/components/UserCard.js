import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import image from "../assets/img0.jpg";
const UserCard = () => {
  return (
    <>
      <UserCardContainer>
        <div className="avatar-section">
          <Avatar size={45} src={image} />
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
              <span className="online-circle" /> <span>10:00 am</span>
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
`;
