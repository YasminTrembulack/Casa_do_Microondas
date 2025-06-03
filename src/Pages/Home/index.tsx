import Contact from "../Contact";
import Location from "../Location";
import Services from "../Services";

import { MainContainer } from "./styles";

export default function Home() {

    return (
        
        <MainContainer>
            <h1>HOME</h1>
            <Services/>
            <Location/>
            <Contact/>
        </MainContainer>
    );
}