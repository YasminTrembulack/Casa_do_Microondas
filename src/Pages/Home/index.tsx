import Contact from "../Contact";
import Location from "../Location";

import { MainContainer } from "./styles";

export default function Home() {

    return (
        <MainContainer>
            <h1>HOME</h1>
            <Location/>
            <Contact/>
        </MainContainer>
    );
}