import React from "react";
import styled from "styled-components";
import { Link } from "@chakra-ui/react";

import BackImg from "../assets/images/section-1.png";
import Logo from "../assets/images/logo.png";
import LocationIcon from "../assets/icons/Location.svg";
import PhoneIcon from "../assets/icons/phone-call.svg";
import EmailIcon from "../assets/icons/email.svg";
import ButtonLinear from "./ButtonLinear";

const Footer = () => {
  return (
    <Wrapper className="container">
      <div className="footer-top">
        <div className="footer-top__left">
          <div className="footer-top__left-t">
            <div className="footer-title">Контакты</div>
            <div className="footer-contact">
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
                  <img src={EmailIcon} alt="" />
                </div>
                <div className="icon-box__link">
                  <Link href="mailto:info@medol.uz">info@medol.uz</Link>
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <div className="icon-box">
                <div className="icon-box__icon">
                  <img src={PhoneIcon} alt="" />
                </div>
                <div className="icon-box__link">
                  <Link href="tel:+998712766253">+998 71 276-62-53</Link>
                  <Link href="tel:+998712766254">+998 71 276-62-54</Link>
                </div>
              </div>
              <ButtonLinear>Оставить заявку</ButtonLinear>
            </div>
          </div>

          <div className="footer-top__left-b">
            <Link href="/">
              <img src={Logo} alt="" />
            </Link>
            <p>
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>
        </div>
        <div className="footer-top__right">
          <div className="footer-navs">
            <b className="footer-navs__title"> О компании</b>
            <Link href="#">История</Link>
            <Link href="#">Партнеры</Link>
            <Link href="#">Вакансии</Link>
          </div>
          <div className="footer-navs">
            <b className="footer-navs__title">Продукция</b>
            <Link href="#">Эндоваскулярная хирургия</Link>
            <Link href="#">Аритмология</Link>
            <Link href="#">Кардиохирургия</Link>
            <Link href="#">Лабораторная диагностика</Link>
            <Link href="#">Хирургия</Link>
            <Link href="#">Эндоурология</Link>
            <Link href="#">Нейрохирургия</Link>
            <Link href="#">Анестезиология и реанимация</Link>
            <Link href="#">Диабет</Link>
          </div>

          <div className="footer-navs">
            <b className="footer-navs__title">Услуги</b>
            <Link href="#">Сервис</Link>
            <Link href="#">Регистрации</Link>
            <Link href="#">Услуги логистики</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copy">© 2023 ООО «Medical Online Services»</p>
        <div className="footer-bottom__right">
          <p>Дизайн сделан: </p>
          <Link href="mailto:damingues92@gmail.com">damingues92@gmail.com</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-image: url(${BackImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 55px;
  padding-bottom: 28px;

  .footer-top {
    display: flex;
    align-items: flex-start;
    gap: 40px;
    margin-bottom: 60px;

    &__left {
      width: 50%;
      &-t {
        display: flex;
        align-items: flex-start;
        gap: 40px;
        margin-bottom: 50px;

        .footer-title {
          color: #595959;
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: 1.04px;
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 30px;
          max-width: 235px;
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
              place-content: center;

              box-shadow: 0 0 5px #eee;
            }

            &__link {
              display: flex;
              flex-direction: column;

              color: #5a5a5a;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              letter-spacing: 0.4px;
              width: 70%;
            }
          }

          button {
            width: 100%;
            height: 50px;
            padding: 13px;

            color: #fff;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }

      &-b {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 40px;

        img {
          width: 200px;
        }

        p {
          color: #585858;
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 28px;
          letter-spacing: 0.72px;

          width: 70%;
        }
      }
    }

    &__right {
      width: 50%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      .footer-navs {
        display: flex;
        flex-direction: column;
        gap: 15px;

        &__title {
          color: #595959;
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 28px;
          letter-spacing: 1.04px;
        }

        a {
          color: #595959;
          font-size: 18px;
          cursor: pointer;
          font-style: normal;
          line-height: 28px;
          letter-spacing: 1.04px;

          &:hover {
            text-decoration: underline;
            color: rgba(0, 201, 201, 1);
          }
        }
      }
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copy {
      color: #353535;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0.72px;
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 5px;
      color: #595959;
      font-size: 26px;
      font-style: normal;
      font-weight: 500;
      line-height: 28px;
      letter-spacing: 1.04px;

      a {
        color: rgba(0, 201, 201, 1);
      }
    }
  }

  @media (max-width: 1440px) {
    padding-top: 40px;

    .footer-top {
      gap: 30px;
      margin-bottom: 30px;

      &__left {
        &-t {
          gap: 15px;
          margin-bottom: 30px;

          .footer-contact {
            .icon-box {
              gap: 10px;

              &__link {
                font-size: 14px;
              }
            }
          }
        }
        &-b {
          gap: 30px;

          p {
            font-size: 16px;
          }
        }
      }
      &__right {
        .footer-navs {
          gap: 10px;

          &__title {
            font-size: 22px;
          }

          a {
            font-size: 16px;
          }
        }
      }
    }

    .footer-bottom {
      .copy {
        font-size: 16px;
      }

      &__right {
        font-size: 20px;
      }
    }
  }

  @media (max-width: 1025px) {
    .footer-top {
      &__left {
        width: 40%;
        &-t {
          flex-direction: column;

          .footer-contact {
            width: 100%;
            .icon-box {
              &__icon {
                width: 40px;
                height: 40px;
              }
            }
          }
        }

        &-b {
          flex-direction: column;
          align-items: flex-start;
          p {
            width: 100%;
            font-size: 12px;
          }
        }
      }

      &__right {
        width: 67%;

        .footer-navs {
          gap: 5px;
          &__title {
            font-size: 18px;
          }
          a {
            font-size: 14px;
          }
        }
      }
    }

    .footer-bottom {
      .copy {
        font-size: 14px;
      }

      &__right {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 770px) {
  }
`;
