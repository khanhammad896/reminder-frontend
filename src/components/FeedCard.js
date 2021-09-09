import React from "react";
import styled from "styled-components";
import { Avatar } from "antd";
import img0 from "../assets/img0.jpg";
const FeedCard = () => {
  return (
    <>
      <CardContainer>
        <div className="card-body">
          <Avatar className="profile-avatar" src={img0} />
        </div>
        <Avatar className="notification-avatar">31</Avatar>
      </CardContainer>
    </>
  );
};

export default FeedCard;

const CardContainer = styled.div`
  width: 100%;
  margin-block: 40px;
  position: relative;
  .card-body {
    width: 90%;
    margin-left: auto;
    margin-right: 10px;
    height: 150px;
    background: #fff;
    box-shadow: 5px 5px 10px 0px #9b9b9b;
    border-radius: 30px;
  }
  .profile-avatar {
    border: 5px solid #fff;
    position: relative;
    top: 120px;
    left: -40px;
    box-shadow: 0 3px 7px 1px #6e6e6e;
    width: 64px;
    height: 64px;
  }

  .notification-avatar {
    position: absolute;
    background: #f45555;
    border: 5px solid #fff;
    width: 50px;
    height: 50px;
    bottom: 80%;
    right: 0%;
  }
  @media screen and (max-width: 400px) {
    .profile-avatar {
      width: 40px;
      height: 40px;
      left: -20px;
      top: 125px;
      border: 2px solid #fff;
    }
    .notification-avatar {
      width: 30px;
      height: 30px;
      border: 2px solid #fff;
      bottom: 85%;
      right: 2%;
    }
  }
`;
