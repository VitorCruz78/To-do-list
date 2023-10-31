// import { InputTask } from "../../components/InputsTask";
import { Header } from "../../components/Header";
import { Container, HeaderTasks, NoTasks } from "./styles";
import { Scroll } from 'phosphor-react'

export function Home() {
    return (
        <>
            <Header />
            <Container>
                <HeaderTasks>
                    <p id="tasksCreate">Tarefas criadas <span>0</span></p>
                    <p id="conclused">Concluídas <span>0</span></p>
                </HeaderTasks>

                <NoTasks>
                    <Scroll size={60} weight="light" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </NoTasks>
            </Container>
        </>
    )
}