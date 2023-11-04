import styled from "styled-components";

export const FormForInputs = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`

export const InputStyle = styled.input`
    font-family: 'Inter', sans-serif;
    width: 28.15rem;
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

export const ButtonCreateTask = styled.button`
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props => props.theme["gray-100"]};
    background: ${props => props.theme["blue-dark"]};
    border: 0;
    border-radius: 8px;
    padding: 1rem;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid ${props => props.theme["gray-100"]};
        border-radius: 100%;
        padding: 1px;
    }

    &:hover {
        background: ${props => props.theme.blue};
        transition: all ease-in-out;
        transition-duration: 350ms;
    }

    &:disabled {
        cursor: not-allowed;
        background: ${props => props.theme["blue-dark"]};
    }
`