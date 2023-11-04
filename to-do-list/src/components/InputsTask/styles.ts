import styled from "styled-components";

export const ContainerSelectedInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

export const CheckBoxStyle = styled.input`
    position: absolute;
    cursor: pointer;
`

export const InputTaskStyle = styled.input`
    font-family: 'Inter', sans-serif;
    width: 33.5rem;
    background: ${props => props.theme["gray-400"]};    
    border-radius: 8px;
    border: 1px solid transparent; 
    padding: 1.125rem;

    &::placeholder {
        color: ${props => props.theme["gray-100"]};
        font-weight: 500;
        text-align: left;
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme.purple};
        color: ${props => props.theme["gray-100"]};
    }
`