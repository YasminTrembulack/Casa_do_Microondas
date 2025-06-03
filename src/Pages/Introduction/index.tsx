import {
  Section,
  BackgroundImage,
  TextOverlay,
  Title,
  Subtitle,
  Button,
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle
} from './style';
import { useState } from 'react';

export default function Introduction() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section id='inicio'>
        <BackgroundImage src="cozinha.jpg" alt="Imagem de fundo" />
        <TextOverlay>
          <Title>Conserto com peças e acessórios originais</Title>
          <Subtitle>Assistência técnica para as melhores marcas</Subtitle>
          <Button onClick={() => setIsModalOpen(true)}>Conserto em 30 minutos</Button>
        </TextOverlay>
      </Section>

      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
            <ModalTitle>CONSERTO EM 30 MINUTOS</ModalTitle>
            <p><strong>Informamos aos nossos clientes que orçamento e conserto em 30 minutos serão realizados desde que:</strong></p>
            <ul>
              <li><strong>O cliente aguarde no balcão:</strong> A preferência será de quem estiver aguardando.</li>
              <li><strong>Não seja aparelho importado:</strong> Pode haver dificuldade em encontrar peças ou fazer adaptações.</li>
              <li><strong>Não tenha vindo de outra oficina:</strong> Pois algumas vezes vem todo mexido, faltando peças ou com a fiação trocada.</li>
              <li><strong>Seja dentro do horário que o técnico está trabalhando:</strong> (08:30 às 11:30 e 13:00 às 16:30). Após este horário será orçado e consertado no dia seguinte.</li>
              <li><strong>Não necessite de pintura ou retoque de pintura:</strong> Nesse caso precisa-se de até 15 dias para ficar pronto.</li>
            </ul>
            <p><strong>Não serão avaliados na hora:</strong> micro-ondas de convecção, fornos Fischer Lumen, fornos de embutir 60L, máquinas de pão ou outros que exijam mais tempo.</p>
            <p><strong>Dentro dos 30 minutos está incluso:</strong> limpeza e higienização. Se o aparelho estiver muito engordurado ou com sujeiras profundas, pode demorar mais.</p>
            <p><strong>Contamos com sua compreensão.</strong></p>
            <p><strong>- CASA DO MICROONDAS</strong></p>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
}




