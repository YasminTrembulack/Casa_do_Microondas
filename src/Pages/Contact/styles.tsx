import styled from "styled-components";

export const Container = styled.div`
  padding-top: 8vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;

export const Title = styled.h2`
  width: 100%;
  padding: 20px 0px;
  font-size: 28px;
  border-bottom: solid #ffc0ad 2px;
  margin-bottom: 20px;
`;

export const Title2 = styled.p`
  width: 100%;
  font-weight: 500;
  padding-bottom: 10px;
  font-size: 24px;
`;

export const Column = styled.div`
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Section = styled.section`
  padding: 40px;
  background-color: #f7f7f7;
  border-radius: 12px;
  max-width: 1000px;
`;

export const Phones = styled.div`
  width: 30%;
  background-color: #5c5c5c;
  height: 210px;
  color: white;
  padding: 30px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: start;
  font-size: 16px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 23px;
    margin-bottom: 10px;
    border-bottom: solid white 1px;
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0;
    line-height: 1.5;
    font-size: 18px;
  }

  a {
    color: white;
    text-decoration: underline;
  }
`

export const ContactDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 30px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 30px;
  color: #666;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
  resize: vertical;
  min-height: 100px;
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 14px;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: #ff5926;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e14e1f;
  }
`;


export const Icon = styled.img`
  height: 25px;
  width: 25px;
`;