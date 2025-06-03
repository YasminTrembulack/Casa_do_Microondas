import LocationDiv from "../../Components/LocationDiv";

import { Container, LocationContainer, Title } from "./styles.tsx";

export default function Location()
{
    return (
        <Container id="#localizacao">
            <Title>Nossas Lojas!</Title>
            <LocationContainer>
                <LocationDiv 
                    img="location_1.png"
                    title="Unidade de Rebouças - Curitiba"
                    description="Avenida Presidente Kennedy 410"
                    link="https://maps.app.goo.gl/BiM71XwjPAPaDFPr6"
                />

                <LocationDiv 
                    img="location_2.png"
                    title="Unidade de Santa Felicidade - Curitiba"
                    description="Rua Saturnino Miranda, 84"
                    link="https://maps.app.goo.gl/yPt9fQ16xEJvJ7xV9"
                />
            </LocationContainer>
        </Container>
    )
}