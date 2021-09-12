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
        <div className="menu-item center-circle">
          {tabIndex === 2 ? <BiUserPlus /> : <BiBellPlus />}
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
        {/* <div className="outer-circle">
          {tabIndex === 2 ? <BiUserPlus /> : <BiBellPlus />}
        </div> */}
      </MenuContainer>
    </>
  );
};

export default MenuWrapper;

const MenuContainer = styled.section`
  width: 60%;
  margin-inline: auto;
  margin-block: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

  a:hover {
    color: #fff;
  }

  .center-circle {
    width: 70px;
    height: 70px;
    border: 4px solid #fff;
    border-radius: 50%;
    background-color: #e9684b;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2.8em;
  }

  @media screen and (max-width: 400px) {
    .menu-items-icons > svg {
      font-size: 2.2em;
    }
    .menu-label {
      font-size: 0.7em;
    }
  }

  @media screen and (max-width: 1200px) {
    & {
      width: 90%;
    }
  }
`;
