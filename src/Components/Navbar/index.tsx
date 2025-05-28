import StyledA from "../StyledA";
import { Header, Links,Title, RightContainer } from "./styles";


export default function NavBar()
{
    return (
        <Header>
            <Title>Casa do Microondas</Title>
            <Links>
                <StyledA to="#inicio" text="Início"></StyledA>
                <StyledA to="#localizacao" text="Localização"></StyledA>
                <StyledA to="#servico" text="Serviço"></StyledA>
                <StyledA to="#contato" text="Contato"></StyledA>
            </Links>
            <RightContainer>
            </RightContainer>
        </Header>
    )
}