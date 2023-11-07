import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    body {
        background: ${(props) => props.theme['gray-500']};
        -webkit-font-smoothing: antialiased;
        ::-webkit-scrollbar {
            width: 12px;
        }
        ::-webkit-scrollbar-track {
            background: ${props => props.theme['gray-500']};
        }
        ::-webkit-scrollbar-thumb {
            background-color: ${props => props.theme['purple-dark']};    /* color of the scroll thumb */
            border-radius: 20px;       /* roundness of the scroll thumb */
            border: 3px solid ${props => props.theme['gray-500']};  /* creates padding around scroll thumb */
        }
    }
`
