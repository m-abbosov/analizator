import React from "react";
import styled from "styled-components";
import {
  Button,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import Logo from "../assets/images/logo.png";
import LocationIcon from "../assets/icons/Location.svg";
import PhoneIcon from "../assets/icons/phone-call.svg";
import FindIcon from "../assets/icons/Find.svg";
import DownIcon from "../assets/icons/DownIcon.svg";
import FlagIconRus from "../assets/icons/Flag_of_Russia 1.svg";
import FlagIconUz from "../assets/icons/flag_Uzbekistan.svg";
import FacebookIcon from "../assets/icons/facebook-app.svg";

const Header = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="header-top">
          <div className="header-top__left">
            <div className="icon-box">
              <div className="icon-box__icon">
                <img src={LocationIcon} alt="" />
              </div>
              <div className="icon-box__link">
                <Link href="#">г.Ташкент, Чиланзар 10 квартал, дом 3/1</Link>
              </div>
            </div>
            <div className="icon-box">
              <div className="icon-box__icon">
                <img src={PhoneIcon} alt="" />
              </div>
              <div className="icon-box__link">
                <Link href="tel:+998712766253">+998 71 276-62-53</Link>
                <Link href="tel:+998712766254">+998 71 276-62-54</Link>
              </div>
            </div>
          </div>
          <img className="logo" src={Logo} alt="" />
          <div className="header-top__right">
            <Button className="find-btn" size="xs">
              <img src={FindIcon} alt="" />
            </Button>
            <Button className="facebook-btn" size="xs">
              <img src={FacebookIcon} alt="" />
              <p>Мы на Facebook</p>
            </Button>
            <Menu>
              <MenuButton
                className="lang-btn"
                as={Button}
                rightIcon={<img src={DownIcon} alt="" />}
              >
                <img className="flag-icon" src={FlagIconRus} alt="" />
                <p>Русский</p>
              </MenuButton>
              <MenuList>
                <MenuItem className="lang-item">
                  <img className="flag-icon" src={FlagIconRus} alt="" />
                  <p>Русский</p>
                </MenuItem>
                <MenuItem className="lang-item">
                  <img className="flag-icon" src={FlagIconUz} alt="" />
                  <p>Uzbek</p>
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
        <nav className="links"></nav>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding-top: 50px;
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__left {
      display: flex;
      align-items: center;
      gap: 40px;
      .icon-box {
        display: flex;
        align-items: center;
        gap: 20px;
        &__icon {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background: #fff;
          display: grid;
          place-items: center;
          box-shadow: 0 0 5px #eee;
        }

        &__link {
          color: #5a5a5a;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.4px;
          width: 163px;

          display: flex;
          flex-direction: column;
        }
      }
    }

    &__right {
      display: flex;
      align-content: center;
      gap: 54px;
      .find-btn {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: #fff;
        box-shadow: 0 0 5px #eee;
      }

      .facebook-btn {
        padding: 10px;
        border-radius: 25px;
        height: auto;
        background: #fff;
        box-shadow: 0 0 5px #eee;
        display: flex;
        align-items: center;
        gap: 10px;

        p {
          color: #0d4c93;
          text-align: center;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      .lang-btn {
        padding: 10px;
        border-radius: 25px;
        height: auto;
        background: #fff;
        box-shadow: 0 0 5px #eee;
        display: flex;
        align-items: center;
        gap: 12px;
        span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .flag-icon {
          border-radius: 50%;
        }

        p {
          color: #0d4c93;
          text-align: center;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }
      .lang-item {
        display: flex;
        align-items: center;
        gap: 10px;

        .flag-icon {
          width: 35px;
        }
      }
    }
  }
`;
