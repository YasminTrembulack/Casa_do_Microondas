import {
  Section,
  Container,
  Title,
  Subtitle,
  Form,
  Input,
  Textarea,
  Column,
  Button,
  Title2,
  Phones,
  ContactDiv,
  Icon,
} from "./styles.tsx";

export default function Contact() {
  return (
    <Container id="#contato">
      <Title>Entre em Contato</Title>
      <ContactDiv>
        <Section>
          <Title2>Preencha o formulário abaixo</Title2>
          <Subtitle>
            Entre em contato através de nosso formulário, lhe responderemos o
            mais breve possível!
          </Subtitle>
          <Form>
            <Column>
              <Input type="text" placeholder="Nome" required />
              <Input type="email" placeholder="E-mail" required />
              <Input type="text" placeholder="Assunto" />
            </Column>
            <Column>
              <Input type="tel" placeholder="Telefone" />
              <Textarea placeholder="Mensagem" required />
              <Button type="submit">Enviar</Button>
            </Column>
          </Form>
        </Section>
        <Phones>
          <h3>Fale conosco</h3>
          <p>
            <Icon src="icons8-telefone-96.png"/>
             (41) 3332-8000
          </p>
          <p>
            <Icon src="icons8-relógio-96.png"/>
            Seg a Sex, 08h às 18h
          </p>

        </Phones>
      </ContactDiv>
    </Container>
  );
}
