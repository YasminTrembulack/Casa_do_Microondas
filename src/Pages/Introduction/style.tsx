import styled from "styled-components";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(4px) brightness(0.7);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const TextOverlay = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-family: "Bebas Neue", sans-serif;
  font-size: 2.5rem;
  color: #fff;
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

export const Subtitle = styled.h2`
  font-family: "Bebas Neue", sans-serif;
  font-size: 1.25rem;
  color: #eee;
  font-weight: 400;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: #ff5926;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  z-index: 3;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e96e00;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  position: relative;
  line-height: 1.8;
  font-size: 1rem;
`;

export const ModalTitle = styled.h2`
  color: red;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-align: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;
