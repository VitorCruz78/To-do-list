import { useState } from 'react'
import { Scroll } from "phosphor-react"
import { Header } from "../../components/Header"
import { Input } from "../../components/Inputs"
import { Container, ContainerInputsTasks, HeaderTasks, NoTasks } from "./styles"
import { InputTask } from '../../components/InputsTask'

export function Home() {

    const [createdTasks, setCreatedTasks] = useState<string[]>([])
    const [conclusedTasks, setConclusedTasks] = useState<string[]>([])
    const [cancelTasks, setCancelTasks] = useState<string[]>([])

    const handleCreatedTask = (data: []) => {
        setCreatedTasks(data)
    }

    const handleConclusedTasks = (items: []) => {
        setConclusedTasks(items)
    }

    const handleCancelTasks = (items: []) => {
        setCancelTasks(items)
    }

    const handleDeleteTask = (taskToDelete: string) => {
        setConclusedTasks((state: string[]) => state.filter(task => task !== taskToDelete));
        setCancelTasks((state: string[]) => state.filter(task => task !== taskToDelete));
        setCreatedTasks((state: string[]) => state.filter(task => task !== taskToDelete));
    }

    const controlledTasks = conclusedTasks?.length - cancelTasks?.length

    return (
        <>
            <Header />
            <Input sendDataToParent={handleCreatedTask} />
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
                        createdTasks?.length > 6
                            ?
                            <ContainerInputsTasks>
                                {
                                    createdTasks?.map(task => {
                                        return <InputTask
                                            key={task}
                                            sendConclusedTasks={handleConclusedTasks}
                                            sendCancelTasks={handleCancelTasks}
                                            sendDeleteTasks={handleDeleteTask}
                                            value={task} />
                                    })
                                }
                            </ContainerInputsTasks>
                            :
                            <>
                                {
                                    createdTasks?.map(task => {
                                        return <InputTask
                                            key={task}
                                            sendConclusedTasks={handleConclusedTasks}
                                            sendCancelTasks={handleCancelTasks}
                                            sendDeleteTasks={handleDeleteTask}
                                            value={task} />
                                    })
                                }
                            </>
                }
            </Container>
        </>
    )
}