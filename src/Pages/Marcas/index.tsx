import { Section, Title, BrandsContainer, BrandImage } from './style';

export default function Marcas() {
  return (
    <Section>
      <Title>Marcas que trabalhamos:</Title>
      <BrandsContainer>
        <BrandImage src="Samsung.png" alt="Samsung" />
        <BrandImage src="Brastemp.png" alt="Brastemp" />
        <BrandImage src="Electrolux-Logo.png" alt="Electrolux" />
        <BrandImage src="LG.jpg" alt="LG" />
        <BrandImage src="Panasonic.png" alt="Panasonic" />
        <BrandImage src="consul-2007-logo.png" alt="Consul" />
        <BrandImage src="philco-logo.png" alt="Philco" />
      </BrandsContainer>
    </Section>
  );
}

