import styled from "styled-components";

export const ArticleConatiner = styled.div`
  display: flex;
  flex-direction: column;
  border: 0.5px solid white;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 7px;
  width: 30%;
  height: auto;
  margin: 20px;
`;

export const ArticleImg = styled.img``;

export const ArticleTextConatiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 7px;
  padding-left: 10px;
  justify-content: space-between;
  height: 100%; /* Ensure the container expands to occupy all available space */
`;


export const ArticleTitle = styled.h3`
  color: rgba(234, 50, 50, 1);
  font-size: 14px;
  margin-bottom: 10px;
  height: 18px; /* Set a fixed height */
  overflow: hidden; /* Hide overflow text */
`;

export const ArticleName = styled.h2`
  color: rgba(43, 69, 155, 1);
  font-size: 16px;
  margin-bottom: 10px;
  height: 35px; /* Set a fixed height */
  overflow: hidden; /* Hide overflow text */
`;

export const ArticleDescription = styled.p`
  color: black;
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  height: 50px; /* Set a fixed height */
  overflow: hidden; /* Hide overflow text */
`;

export const ArticleTime = styled.h3`
  color: rgba(43, 69, 155, 1);
  margin-left: 73%;
  font-size: 13px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Arrow = styled.h2`
  color: rgba(43, 69, 155, 1);
  margin-left: 93%;
  font-weight: 900;
  margin-bottom: 10px; /* Adjusted margin */
`;
