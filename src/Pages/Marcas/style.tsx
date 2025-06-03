import styled from 'styled-components';

export const Section = styled.section`
  width: 70%;
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
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

export const BrandsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  max-width: 1200px;
`;

export const BrandImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: contain;
  filter: grayscale(0.3);
  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0);
  }
`;
