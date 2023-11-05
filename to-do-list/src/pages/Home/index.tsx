import { useState } from 'react'
import { Scroll } from "phosphor-react"
import { Header } from "../../components/Header"
import { Input } from "../../components/Inputs"
import { Container, HeaderTasks, NoTasks } from "./styles"
import { InputTask } from '../../components/InputsTask'

export function Home() {

    const [createdTasks, setCreatedTasks] = useState([])
    const [conclusedTasks, setConclusedTasks] = useState([])
    const [cancelTasks, setCancelTasks] = useState([])

    const handleDataFromChild = (data: []) => {
        setCreatedTasks(data)
    }

    const handleConclusedTasks = (items: []) => {
        setConclusedTasks(items)
    }

    const handleCancelTasks = (items: []) => {
        setCancelTasks(items)
    }

    const controlledTasks = conclusedTasks?.length - cancelTasks?.length

    return (
        <>
            <Header />
            <Input sendDataToParent={handleDataFromChild} />
            <Container>
                <HeaderTasks>
                    <p id="tasksCreate">Tarefas criadas <span>{createdTasks?.length}</span></p>
                    <p id="conclused">Concluídas <span>{controlledTasks} de {createdTasks?.length}</span></p>
                </HeaderTasks>
                {
                    createdTasks?.length === 0
                        ?
                        <NoTasks>
                            <Scroll size={60} weight="light" />
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </NoTasks>
                        :
                        createdTasks?.map(tasks => {
                            return <InputTask sendConclusedTasks={handleConclusedTasks} sendCancelTasks={handleCancelTasks} value={tasks} />
                        })
                }
            </Container>
        </>
    )
}