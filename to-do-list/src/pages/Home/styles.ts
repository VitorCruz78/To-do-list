import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
`

export const HeaderTasks = styled.div`
    width: 33rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    font-weight: bold;
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme["gray-400"]};

    #tasksCreate {
        color: ${props => props.theme.blue};

        span {
            background: ${props => props.theme["gray-400"]};
            color: ${props => props.theme["gray-100"]};
            padding: 0 0.25rem;
            border-radius: 8px;
            font-size: 12px;
        }
    }

    #conclused {
        color: ${props => props.theme.purple};

        span {
            background: ${props => props.theme["gray-400"]};
            color: ${props => props.theme["gray-100"]};
            padding: 0 0.25rem;
            border-radius: 8px;
            font-size: 12px;
        }
    }
`

export const NoTasks = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme["gray-300"]};
`