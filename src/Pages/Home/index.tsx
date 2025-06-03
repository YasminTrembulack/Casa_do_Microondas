import Contact from "../Contact";
import Location from "../Location";
import Services from "../Services";
import Introduction from "../Introduction";
import Marcas from "../Marcas";

import { MainContainer } from "./styles";

export default function Home() {

    return (
        
        <MainContainer>
            <Introduction/>
            <Marcas/>
            <Services/>
            <Location/>
            <Contact/>
        </MainContainer>
    );
}