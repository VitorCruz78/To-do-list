import { Rocket } from "phosphor-react";
import { HeaderContainer } from "./styles";

export function Header() {

    return (
        <>
            <HeaderContainer>
                <nav>
                    <span><Rocket fontSize={32} color="#5E60CE" /></span>
                    <a href="#">todo</a>
                </nav>
            </HeaderContainer>
        </>
    )
}