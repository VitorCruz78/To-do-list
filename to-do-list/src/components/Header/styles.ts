import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-700"]};
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: -1.75rem;

    nav {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        line-height: 140%;
        background: -webkit-linear-gradient(${props => props.theme.blue}, ${props => props.theme["purple-dark"]});
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-decoration: none;
    }
`
