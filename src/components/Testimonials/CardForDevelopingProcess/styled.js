import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: 20px 40px 30px 0px;

  padding: 30px 10px 30px 10px;
  background-color: rgba(0, 0, 150, 0.15);
  border-radius: 8px;
  border: 1px solid #cecece;
  height: 350px;
  width: 280px;
  color: #b7b6bd;
  transition: background-color 0.8s ease;
  &:hover {
    background-color: #c7cee8;
  }

  &:hover p {
    color: #263238;
    text-align: justify;
  }

  @media screen and (max-width: 555px) {
    border-radius: 12px;
    flex: 45%;
    width: 70%;
    height: 430px;
    margin: 20px 10px 10px 0px;
  }
`;

export const CardHeader = styled.div`
  display: flex;

  align-items: center;
  padding-left: 10px;

  @media screen and (max-width: 555px) {
    padding: 0px;
  }
`;

export const CardNumber = styled.h1`
  font-size: 20px;
  color: #33499e;
  @media screen and (max-width: 555px) {
    font-size: 18px;
    margin-top: -18px;
    align-self: flex-start;
  }
`;

export const CardTitle = styled.h1`
  margin-left: 10px;
  font-size: 17px;
  color: #2b459b;
  padding-top: 3px;
  @media screen and (max-width: 555px) {
    font-size: 18px;
    margin-top: -20px;
    align-self: flex-end;
  }
`;

export const CardParagraph = styled.p`
  margin: 50px 0 50px 0;
  font-size: 14px;
  color: #b7b6bd;
  line-height: 1.5em;
  padding-left: 10px;
  @media screen and (max-width: 555px) {
    font-size: 90%;
    line-height: 1.5em;
    margin: -10px 0 10px 0;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  background-color: #254989;
  font-size: 14px;
  color: #ffffff;
  padding: 8px 40px 8px 40px;
  outline: none;
  border-width: 0px;
  border-radius: 20px;
  align-self: center;
  @media screen and (max-width: 555px) {
    height: 10%;
    font-size: 8px;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 40%;
  width: 360px;
  background-color: #254989;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (max-width: 555px) {
    width: 71%;
    height: 52%;
    left: 10%;
    top: 35%;

    margin: 10px 10px 10px -20px;
  }
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  @media screen and (max-width: 555px) {
    flex-direction: column;
  }
`;

export const Close = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  align-self: flex-end;
  cursor: pointer;
`;

export const PopupTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
  @media screen and (max-width: 555px) {
    font-size: 100%;
  }
`;

export const PopupImage = styled.img`
  height: 120px;
  width: 120px;
  margin: 0px;
  @media screen and (max-width: 555px) {
    height: 80px;
    width: 80px;
    align-self: center;
  }
`;

export const CloseImg = styled.img`
  height: 10px;
  width: 10px;
`;

export const PopupHeading = styled.h1`
  color: #cbcbcb;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 555px) {
    font-size: 80%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 30px;
  @media screen and (max-width: 555px) {
  }
`;

export const PopupDesc = styled.p`
  color: #ffffff;
  font-size: 14px;
  padding: 20px;
  line-height: 1.25em;
  font-weight: 500;
  @media screen and (max-width: 555px) {
    font-size: 70%;
    width: ;
  }
`;
