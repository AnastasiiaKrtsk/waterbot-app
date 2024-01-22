import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import bgMobile from "../../images/sign/bgMobile.png";
import bgTablet from "../../images/sign/bgTable.png";
import bgDesktop from "../../images/sign/bgDesktop.png";
import bootleMobile from "../../images/sign/bootleMobile.png";
import bootleTablet from "../../images/sign/bootleTable.png";
import bootleDesktop from "../../images/sign/bootleDesktop.png";

export const Bg = styled.div`
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 52px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bgMobile});

  @media screen and (min-width: 768px) {
    margin-top: 0;
    background-image: url(${bgTablet});
  }

  @media screen and (min-width: 1440px) {
    width: auto;
    height: 582px;
    margin-left: 18px;
    margin-right: 18px;
    background-image: url(${bgDesktop});
  }
`;

export const Bootle = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 280px;
  height: 210px;
  background-repeat: no-repeat;
  background-image: url(${bootleMobile});

  @media screen and (min-width: 768px) {
    width: 736px;
    height: 548px;
    position: absolute;
    left: 112px;
    top: 100px;
    background-image: url(${bootleTablet});
  }

  @media screen and (min-width: 1440px) {
    width: 916px;
    height: 680px;
    bottom: 40px;
    left: 0;
    background-image: url(${bootleDesktop});
    background-position: left bottom;
    margin-right: auto;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  margin-top: -28px;
  gap: 16px;
  z-index: 1;

  @media screen and (min-width: 768px) {
    width: 336px;
    margin-left: 12px;
    margin-top: 40px;
    margin-bottom: auto;
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    margin-top: 113px;
    margin-left: auto;
    margin-right: 198px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: var(--black);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--black);
`;

export const Input = styled.input`
  display: flex;
  padding: 12px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 6px;
  border: 1px solid
    ${(props) => (props.errors ? "var(--red)" : "var(--light-blue-2)")};
  background-color: var(--white);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  transition: all, var(--transition);
  color: ${(props) => (props.errors ? "var(--red)" : "var(--dark-blue)")};

  &::placeholder {
    color: var(--light-blue-3);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.25;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px var(--white) inset;
    -webkit-text-fill-color: var(--dark-blue);
  }

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.3);
    transition: var(--transition);
  }

  &:focus {
    caret-color: var(--dark-blue);
    outline: none;
    border: 1px solid
      ${(props) => (props.errors ? "var(--red)" : "var(--dark-blue)")};
  }
`;

export const EyeSvg = styled.svg`
  position: absolute;
  right: 10px;
  top: 58%;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const Error = styled.p`
  position: absolute;
  top: 76px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.28;
  color: var(--red);
`;

export const Btn = styled.button`
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  transition: box-shadow var(--transition);
  background: var(--dark-blue);
  color: var(--white);

  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: var(--transition);
  }
`;

export const LinkBtn = styled(Link)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
  color: var(--dark-blue);
  transition: color var(--transition);

  &:hover {
    color: var(--orange);
  }
`;
