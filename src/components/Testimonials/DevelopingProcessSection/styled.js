import styled from "styled-components";

export const BgContainer = styled.div`
  background-color: rgba(12, 17, 31, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px 30px 30px;
`;
export const CardListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 30px 10%;
  @media screen and (max-width: 555px) {
    flex-wrap: wrap;

    margin-left: -40px;
    margin-right: 0px;
  }
`;

export const Description = styled.p`
  font-family: "inter", sans-serif;
  font-size: 20px;
  color: #858585;
  width: 600px;
  font-weight: bold;
  @media screen and (max-width: 555px) {

    font-size: 17px;
    width: 95%;
    margin-left: -20px;
    line-height: 30px;
  }
`;

export const Our = styled.span`
  color: #ffffff;
  background-color: #2b459b;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 5px 10px;
  font-weight: 500;
`;

export const Devl = styled.span`
  color: #b7b6bd;
  font-weight: bold;
`;

export const Process = styled.span`
  color: #2b459b;
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
`;
