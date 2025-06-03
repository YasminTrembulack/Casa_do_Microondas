import styled from 'styled-components';

export const Section = styled.section`
  width: 100vw;
  min-height: 100vh; /* ocupa a tela toda */
  padding: 4rem 2rem;
  background-color:rgb(186, 186, 186);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color:rgb(0, 0, 0);
  text-align: center;
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
  width: 150px;
  height: auto;
  object-fit: contain;
  filter: grayscale(0.3);
  transition: transform 0.3s, filter 0.3s;

  &:hover {
    transform: scale(1.1);
    filter: grayscale(0);
  }
`;
