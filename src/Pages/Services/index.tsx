import { Card, Description, Grid, Container, ServiceTitle, Title } from "./styles.tsx";

export default function Services() {
  return (
    <Container id="servico">
      <Title>Nossos Serviços</Title>
      <Grid>
        <Card>
          {/* <Image src="/imgs/microondas1.png" alt="Conserto de Microondas" /> */}
          <ServiceTitle>Conserto de Microondas</ServiceTitle>
          <Description>
            <ul>
              <li>Mais de 2.000 peças em estoque para trocas imediatas.</li>
              <li>Parcelamento em até 3x no cartão ou cheque.</li>
              <li>Serviço com garantia e atendimento especializado.</li>
            </ul>
          </Description>
        </Card>

        <Card>
          {/* <Image src="/imgs/forno.png" alt="Conserto de Forno Elétrico" /> */}
          <ServiceTitle>Conserto de Forno Elétrico</ServiceTitle>
          <Description>
            <ul>
              <li>Conserto em até 4 horas com agilidade e qualidade.</li>
              <li>Parcelamento em até 3x no cartão ou cheque.</li>
              <li>Garantia no serviço e possibilidade de reforma completa.</li>
            </ul>
          </Description>
        </Card>

        <Card>
          {/* <Image src="/imgs/reforma.png" alt="Reformas de Microondas" /> */}
          <ServiceTitle>Reformas de Microondas</ServiceTitle>
          <Description>
            <ul>
              <li>Reformas indicadas para aparelhos antigos com ferrugem.</li>
              <li>Modelos antigos costumam ser mais duráveis e potentes.</li>
              <li>São mais potentes e não vazam microondas;</li>
              <li>Microndas reformados não vazam e duram até 30 anos.</li>
              <li>Hoje, a maioria das marcas disponíveis é de origem chinesa.</li>
            </ul>
          </Description>
        </Card>

        <Card>
          {/* <Image src="/imgs/acessorio.png" alt="Acessórios Originais" /> */}
          <ServiceTitle>Acessórios Originais</ServiceTitle>
          <Description>
            <ul>
              <li>Pratos giratórios, rodanas, cruzetas e peças compatíveis.</li>
              <li>Traga a marca e o modelo do seu aparelho para garantir compatibilidade.</li>
              <li>Itens também para fornos elétricos e microondas diversos.</li>
            </ul>
          </Description>
        </Card>

        <Card>
          {/* <Image src="/imgs/usados.png" alt="Microondas Novos e Usados" /> */}
          <ServiceTitle>Microondas Novos e Usados</ServiceTitle>
          <Description>
            <ul>
              <li>Modelos disponíveis para pronta entrega (110v e 220v).</li>
              <li>Marcas variadas, direto da fábrica.</li>
              <li>Locação de microondas para empresas ou residências.</li>
              <li>Pagamento facilitado: até 6x no cartão, sem juros.</li>
            </ul>
          </Description>
        </Card>

        <Card>
          {/* <Image src="/imgs/van.png" alt="Serviço de Busca e Entrega" /> */}
          <ServiceTitle>Serviço de Busca e Entrega</ServiceTitle>
          <Description>
            <ul>
              <li>Retiramos e entregamos seu aparelho em toda Curitiba.</li>
              <li>Basta agendar pelo telefone (41) 3332-8000.</li>
              <li>Mais conforto, sem sair de casa.</li>
            </ul>
          </Description>
        </Card>
      </Grid>
    </Container>
  )
}