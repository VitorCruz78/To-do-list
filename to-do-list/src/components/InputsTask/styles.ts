import styled from "styled-components";

export const InputTaskStyle = styled.input`
    font-family: 'Inter', sans-serif;
    width: 33.5rem;
    background: ${props => props.theme["gray-400"]};
    border-radius: 8px;
    border: 1px solid transparent; 
    padding: 1.125rem;

    &::placeholder {
        text-align: left;
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.purple};
        color: ${props => props.theme["gray-100"]};
    }
`