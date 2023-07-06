import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import Logo from "../assets/images/logo.png";
import LocationIcon from "../assets/icons/Location.svg";
import PhoneIcon from "../assets/icons/phone-call.svg";
import FindIcon from "../assets/icons/Find.svg";
import DownIcon from "../assets/icons/DownIcon.svg";
import FlagIconRus from "../assets/icons/Flag_of_Russia 1.svg";
import FlagIconUz from "../assets/icons/flag_Uzbekistan.svg";
import FacebookIcon from "../assets/icons/facebook-app.svg";
import BurgerIcon from "../assets/icons/Burger.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [drawer, setDrawer] = useState(false);
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const btnRef = React.useRef();

  const drawerOpen = () => {
    setDrawer((prev) => !prev);
  };
  return (
    <Wrapper>
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
          <Button onClick={onOpen} className="facebook-btn" size="xs">
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
        <img
          src={BurgerIcon}
          ref={btnRef}
          onClick={drawerOpen}
          className="burger"
          alt=""
        />
      </div>
      <nav className="links">
        <Link className="link" href="#">
          МАГАЗИН<div className="circle"></div>
        </Link>
        <Link className="link" href="#about">
          О КОМПАНИИ <div className="circle"></div>
        </Link>
        <Link className="link" href="#product">
          ПРОДУКЦИЯ <div className="circle"></div>
        </Link>
        <Link className="link" href="#services">
          УСЛУГИ <div className="circle"></div>
        </Link>
        <Link className="link" href="#news">
          АКЦИИ И НОВОСТИ <div className="circle"></div>
        </Link>
        <Link className="link" href="#">
          ОБРАТНАЯ СВЯЗЬ <div className="circle"></div>
        </Link>
      </nav>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input ref={initialRef} placeholder="First name" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Last name</FormLabel>
              <Input placeholder="Last name" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="mobile">
        <Drawer
          isOpen={drawer}
          placement="right"
          onClose={drawerOpen}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader></DrawerHeader>

            <DrawerBody className="drawer-mobile">
              <Link href="#">
                <img src={Logo} alt="" />
              </Link>
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
              <nav className="links">
                <Link className="link" href="#">
                  МАГАЗИН<div className="circle"></div>
                </Link>
                <Link className="link" href="#about">
                  О КОМПАНИИ <div className="circle"></div>
                </Link>
                <Link className="link" href="#product">
                  ПРОДУКЦИЯ <div className="circle"></div>
                </Link>
                <Link className="link" href="#services">
                  УСЛУГИ <div className="circle"></div>
                </Link>
                <Link className="link" href="#news">
                  АКЦИИ И НОВОСТИ <div className="circle"></div>
                </Link>
                <Link className="link" href="#">
                  ОБРАТНАЯ СВЯЗЬ <div className="circle"></div>
                </Link>
              </nav>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding-top: 50px;
  margin-bottom: 70px;
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
      align-items: center;
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
          width: 30px;
          height: 30px;
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
      .chakra-menu__menu-list {
        position: relative;
        z-index: 99;
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

    .burger {
      display: none;
    }
  }

  .links {
    width: 100%;
    border-radius: 35px;
    opacity: 0.8999999761581421;
    background: #fff;

    display: flex;
    padding: 0 34px 0 49px;
    justify-content: space-between;

    .link {
      position: relative;
      padding: 24px 35px;
      color: #0d4c93;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      cursor: pointer;
      text-decoration: none;

      .circle {
        opacity: 0;
        position: absolute;
        top: 11px;
        right: 11px;
        content: "";
        width: 12px !important;
        height: 12px !important;
        border-radius: 12px;
        background: #00c9c9;
      }

      &:not(:last-child) {
        border-right: 2px solid #f2f2f2;
      }

      &.active,
      &:hover {
        color: #00c9c9;
        .circle {
          opacity: 1;
        }
      }
    }
  }

  .mobile {
    display: none;
  }

  @media (max-width: 1440px) {
    padding-top: 30px;
    margin-bottom: 40px;

    .links {
      padding: 0 20px;

      .link {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 1025px) {
    margin-bottom: 20px;
    gap: 20px;

    .header-top {
      &__left {
        gap: 10px;

        .icon-box {
          gap: 10px;

          &__icon {
            width: 40px;
            height: 40px;
            img {
              width: 15px;
            }
          }

          &__link {
            font-size: 14px;
          }
        }
      }

      .logo {
        width: 130px;
      }

      &__right {
        gap: 10px;

        .find-btn {
          width: 40px;
          height: 40px;
        }

        .facebook-btn {
          padding: 8px;

          gap: 5px;
        }

        .lang-btn {
          padding: 8px;
        }
      }
    }

    .links {
      .link {
        padding: 15px;
        margin: 0 auto;
      }
    }
  }

  @media (max-width: 770px) {
    .header-top {
      &__left {
        display: none;
      }

      &__right {
        display: none;
      }

      .burger {
        display: block;
        width: 35px;
        cursor: pointer;
      }
    }
    .links {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`;
