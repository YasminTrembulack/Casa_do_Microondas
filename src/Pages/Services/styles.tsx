import styled from "styled-components";

export const Container = styled.div`
  padding-top: 8vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

export const Title = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  width: 100%;
  padding: 20px 0px;
  font-size: 28px;
  border-bottom: solid #ffc0ad 2px;
  margin-bottom: 20px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 30px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #f7f7f7;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: solid #f7f7f7 1px;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  &:hover {
    border: solid #ff5926 1px;
    box-shadow: 0px 6px 12px rgba(255, 89, 38, 0.2);
  }
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 15px;
`;

export const ServiceTitle = styled.h3`
  font-size: 18px;
  color: #ff5926;
  margin-bottom: 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #555;

  ul {
    padding-left: 18px;
    text-align: left;
  }
`;
