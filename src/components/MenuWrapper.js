import React, { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoCalendarOutline,
} from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import { BiBellPlus, BiUserPlus } from "react-icons/bi";

const MenuWrapper = () => {
  const location = useLocation();
  const [tabIndex, setTabIndex] = useState(() => {
    if (location.pathname === "/") {
      return 0;
    }
    if (location.pathname === "/reminders") {
      return 1;
    }

    if (location.pathname === "/contacts") {
      return 2;
    }

    if (location.pathname === "/calendar") {
      return 3;
    }
  });

  console.log("Tab index", tabIndex);

  return (
    <>
      <MenuContainer>
        <div className="menu-item">
          <Link
            className={
              tabIndex === 0
                ? `menu-items-icons text-light`
                : `menu-items-icons text-dim`
            }
            to="/"
            onClick={() => setTabIndex(0)}
          >
            <IoHomeOutline />
            <span className="menu-label">Home</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className={
              tabIndex === 1
                ? `menu-items-icons text-light`
                : `menu-items-icons text-dim`
            }
            to="/reminders"
            onClick={() => setTabIndex(1)}
          >
            <IoNotificationsOutline />
            <span className="menu-label">Reminders</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className={
              tabIndex === 2
                ? `menu-items-icons text-light`
                : `menu-items-icons text-dim`
            }
            to="/contacts"
            onClick={() => setTabIndex(2)}
          >
            <RiUser3Line />
            <span className="menu-label">Contacts</span>
          </Link>
        </div>
        <div className="menu-item">
          <Link
            className={
              tabIndex === 3
                ? `menu-items-icons text-light`
                : `menu-items-icons text-dim`
            }
            to="/calendar"
            onClick={() => setTabIndex(3)}
          >
            <IoCalendarOutline />
            <span className="menu-label">Calendar</span>
          </Link>
        </div>
        <div className="outer-circle">
          {tabIndex === 2 ? <BiUserPlus /> : <BiBellPlus />}
        </div>
      </MenuContainer>
    </>
  );
};

export default MenuWrapper;

const MenuContainer = styled.section`
  width: 80%;
  margin-inline: auto;
  margin-block: 50px;
  display: flex;
  justify-content: space-between;
  position: relative;
  .menu-item {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .menu-items-icons {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .menu-items-icons > svg {
    font-size: 2.8em;
  }
  .menu-label {
    margin-top: 10px;
    font-size: 0.8em;
  }

  .outer-circle {
    width: 50px;
    height: 50px;
    background: rgba(256, 256, 256, 1);
    border-radius: 50%;
    position: absolute;
    bottom: 70px;
    right: -40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    color: #5c56cd;
    cursor: pointer;
    border: 6px solid #5c56cd;
    transition: background-color 0.3s linear, color 0.3s linear,
      border-color 0.3s linear;
  }

  .outer-circle:hover {
    background-color: #5c56cd;
    color: #fff;
    border-color: #fff;
  }

  a:hover {
    color: #fff;
  }

  @media screen and (max-width: 400px) {
    .menu-items-icons > svg {
      font-size: 2.2em;
    }
    .menu-label {
      font-size: 0.7em;
    }
  }
`;
