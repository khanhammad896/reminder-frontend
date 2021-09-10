import React from "react";
import styled from "styled-components";
import { Avatar, Typography } from "antd";
import img0 from "../assets/img0.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineUser, HiOutlineCalendar } from "react-icons/hi";
const { Title } = Typography;

const FeedCard = () => {
  const today = Date();
  const date = today.split(" ");
  return (
    <>
      <CardContainer>
        <div className="card-body">
          <Avatar className="profile-avatar" src={img0} />
          <Avatar className="notification-avatar">31</Avatar>

          <div className="card-content">
            <Title level={2}>Contract signatures</Title>
            <div className="recipient-container">
              <div className="contact-section">
                <HiOutlineUser />
                <span className="contacts-name">You, Maria, Jogen</span>
              </div>
              <div className="date-section">
                <HiOutlineCalendar />
                <span className="date">{`${date[0]} ${date[1]} ${date[2]}, ${date[3]}`}</span>
              </div>
            </div>
            <div className="message-preview">
              Maria can't move on to mockups until you can Maria can't move on
              to mockups until you can
            </div>
          </div>
          <div className="card-expansion-icon">
            <IoIosArrowForward />
          </div>
        </div>
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
    background: #fafafa;
    box-shadow: 5px 5px 10px 0px #9b9b9b;
    border-radius: 30px;
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    padding-left: 40px;
  }

  .card-content {
    flex-grow: 1;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  .card-expansion-icon {
    margin-left: 1em;
    flex-shrink: 1;
    display: flex;
    font-size: 2em;
    justify-content: center;
    align-items: center;
    color: #152551;
  }

  .card-expansion-icon > svg {
    cursor: pointer;
  }

  .profile-avatar {
    border: 5px solid #fff;
    position: absolute;
    top: calc(100% - 25%);
    left: 0px;
    box-shadow: 0 3px 7px 1px #6e6e6e;
    width: 64px;
    height: 64px;
  }

  .notification-avatar {
    position: absolute;
    background: #f45555;
    border: 5px solid #fafafa;
    width: 50px;
    height: 50px;
    box-shadow: 0 3px 7px 0px #6e6e6e;
    bottom: 80%;
    right: 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
  }
  h2.ant-typography {
    margin: 0;
  }
  .recipient-container {
    margin-block: 10px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }
  .contact-section,
  .date-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .contact-section > svg,
  .date-section > svg {
    font-size: 1.3em;
    color: #5c56cd;
  }
  .date-section {
    margin-left: 20px;
  }

  .contacts-name,
  .date {
    margin-left: 5px;
    color: #152551;
    font-weight: bold;
    font-size: 0.9em;
  }

  .message-preview {
    opacity: 40%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 400px) {
    .profile-avatar {
      width: 40px;
      height: 40px;
      top: 85%;
      border: 2px solid #fff;
    }
    .notification-avatar {
      width: 30px;
      height: 30px;
      border: 2px solid #fafafa;
      bottom: 90%;
      right: 2%;
      font-size: 0.9em;
    }
  }
`;
